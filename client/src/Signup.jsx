import { ErrorMessage, Field, Form, Formik } from "formik";
import React, {useState} from "react";
import { userSignUp } from "../services/services";
import { Link, useNavigate } from "react-router-dom";
import Label from "./components/Label";
import EscudoAfa from "./components/EscudoAfa";
import styled from "styled-components";
import Button from "./components/Button";
import {ConnectionError} from '../config/errors.js'

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  rePassword: "",
};

const Signup = () => {
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  const onSignUp = async userData => {
    try {
      await userSignUp(userData);
      navigate("/successfull");
    } catch (e) {
        setError("Actualmente tenemos problemas en el servidor, disculpe las molestias")
        throw new ConnectionError("Database is not available");
    }
  };

  return (
    <section class="w-screen h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <EscudoAfa width = '20' />
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          let data = {
            name: values.firstname + " " + values.lastname,
            email: values.email,
            password: values.password,
          };
          onSignUp(data);
        }}>
        {() => (
          <Form
            autoComplete="off"
            class="w-[100%] max-w-[320px] flex flex-col justify-center gap-2">
            <Label htmlFor="firstname" content="Nombre" />
            <Field
              name="firstname"
              placeholder="Lionel Andrés"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />

            <Label htmlFor="lastname" content="Apellido" />
            <Field
              name="lastname"
              placeholder="Messi"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />

            <Label htmlFor="email" content="Mail" />
            <Field
              id="email"
              name="email"
              placeholder="email@email.com"
              aria-describedby="explicacionmail"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />

            <Label htmlFor="password" content="Contraseña" />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              aria-describedby="explicacionpassword"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />

            <Label htmlFor="rePassword" content="Repetir Contraseña" />
            <Field
              name="rePassword"
              type="password"
              placeholder="Repetir contraseña"
              aria-describedby="explicacionrepassword"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            />

            {error ? <div class = 'text-red-600 text-sm'>{error}</div> : null}
            <div class="flex flex-col items-center gap-2 mt-2">
              <Button type="submit" func="primary" label="Registrarse" />
              <Link to="/login">Ya tengo cuenta</Link>
            </div>
          </Form>
        )}
      </Formik>

    </section>
  );
};

export default Signup;
