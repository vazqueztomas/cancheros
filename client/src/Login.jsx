import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Formik, Form, Field, ErrorMessage,} from 'formik';
import { useApplicationState } from '../config/state';
import { userLogin } from '../services/services';
import { useNavigate } from 'react-router-dom';
import {myContext} from '../context/AuthProvider';

const initialValues = {
  email: '',
  password : '',
}
const Login = () => {
  const navigate = useNavigate();
  const [error,setError] = useState()
  const {auth, setAuth, setPersist} = myContext();
  
  const handleLogin = async (user) => {
    console.log(user);
    try {
      const response = await userLogin(user);
      const accessToken = response.data.userInfo.accessToken;
      setAuth({accessToken})
      console.log(response.data.userInfo);
      setPersist(true);
      console.log(auth)
      navigate('/select-team');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    localStorage.setItem("persist", true);
  }, [])

  return (
    <div>
     <Formik
      initialValues={initialValues}
      validate = {values => {}}
      onSubmit = {(valores) => {
        handleLogin(valores);
      }}>
        {() => (
          <Form>
            <Label>
            <label htmlFor='email'>Email</label>
            <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
            </Label>

          <Label>

           <label htmlFor = 'password'>Password</label>
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit">
             Ingresar
           </button>
          </Label>
          </Form>
        )}
     </Formik>
        {error == 401 ? <h4 style = {{color: 'red'}}>Email o contraseña inválidos.</h4> : null}
        <button onClick = {() => navigate('/signup')}>Aun no tienes cuenta?</button>
    </div>
  )
}

const Label = styled.div`
  display: flex;
  flex-direction: column
`

export default Login;