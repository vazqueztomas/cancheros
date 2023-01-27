import React, { useState } from 'react'
import styled from 'styled-components';
import {Formik, Form, Field, ErrorMessage,} from 'formik';
const initialValues = {
  email: '',
  password : '',
}
const Login = () => {
  const {userData, setUserData} = useState({})

  const handleSubmit = (e) => {
    e.preventDefault;
  }
  return (
    <div>
     <Formik
      initialValues={initialValues}
      validate = {values => {}}
      onSubmit = {(valores) => {
        setUserData(valores);
        console.log(userData);
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
             Submit
           </button>
          </Label>
          </Form>
        )}
     </Formik>
    </div>
  )
}

const Label = styled.div`
  display: flex;
  flex-direction: column
`

export default Login