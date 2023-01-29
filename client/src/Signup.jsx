import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { userSignUp } from '../services/services';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  rePassword: '',
}
const onSignUp = async (userData) => {
  console.log(userData);
  try {
    const response = await userSignUp(userData);
    console.log('bien', response)
  } catch (e) {
    console.error(e);
  }
};


const Signup = () => {
  return (
    <Formik
    initialValues={initialValues}
    validate = {(valores) => {
    let errores = {}
    return errores;
  }}

  onSubmit={(values) => {
    let data = {
      name : values.firstname + values.lastname,
      email: values.email,
      password: values.password
    }
    onSignUp(data);
  }}>
    {() => (
    <Form autoComplete="off" style = {{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor="firstname">Nombre</label>
      <Field
      name='firstname'
      placeholder = "Carlos"
      />
  
    <ErrorMessage name = 'firstname' aria-live ='assertive'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>

      <label htmlFor="lastname">Apellido</label>
    <Field
      name="lastname"
      placeholder="González"
    />
  <ErrorMessage name = 'lastname' aria-live ='assertive'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
      <label htmlFor="email">Mail</label>
    <Field
      id='email'
      name="email"
      placeholder="email@email.com"
      aria-describedby="explicacionmail"
    />
    <ErrorMessage name = 'email' aria-live ='assertive'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
      <label htmlFor = 'password'>Contraseña</label>
      
    <div >

    <Field
      id='password'
      name="password"
      placeholder="Contraseña"
      aria-describedby="explicacionpassword"
      />
      </div>
      <ErrorMessage name = 'password' aria-live ='assertive'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
  
      <label htmlFor = 'rePassword'>Repetir Contraseña</label>
      <div >

    <Field
      name="rePassword"
      placeholder="Repetir contraseña"
      aria-describedby="explicacionrepassword"
      />
      </div>
      <ErrorMessage name = 'rePassword' aria-live ='assertive'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
  <button type='submit'>
      Registrarse
  </button>
    </Form>
    )}
  </Formik>

  )
}

export default Signup