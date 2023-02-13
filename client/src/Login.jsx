import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {Formik, Form, Field, ErrorMessage,} from 'formik';
import { userLogin } from '../services/services';
import { useNavigate } from 'react-router-dom';
import {myContext} from '../context/AuthProvider';
import {SecondButton } from './components/styles';
import background from './assets/background.png'

const initialValues = {
  email: '',
  password : '',
}
const Login = () => {
  const navigate = useNavigate();
  const [error,setError] = useState()
  const { auth, setAuth, setPersist} = myContext();
  
  const handleLogin = async (user) => {
    try {
      const response = await userLogin(user);
      const accessToken = response.data.userInfo.accessToken;
      const userLog = response.data;
      setAuth({userLog, accessToken});
      setPersist(true);
      navigate('/select-team');

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    localStorage.setItem("persist", true);
  }, [])

  return (
    <Container>
     <Formik
      initialValues={initialValues}
      validate = {values => {}}
      onSubmit = {async (valores) => {
        await handleLogin(valores);
      }}>
        {() => (
          <Form>
            <Label>
            <label htmlFor='email'>Email</label>
            <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
            </Label>

          <Label>

           <label htmlFor = 'password'>Contraseña</label>
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
        <SecondButton onClick = {() => navigate('/signup')}>Aun no tienes cuenta?</SecondButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 90vh;
  background: url(${background}) 20% 20%;
`

const Label = styled.div`
  display: flex;
  flex-direction: column;
`

export default Login;