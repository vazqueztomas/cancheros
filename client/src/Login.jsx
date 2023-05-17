import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userLogin } from "../services/services";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/AuthProvider";
import Label from "./components/Label";
import Button from "./components/Button";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { setAuth, setPersist } = myContext();

  const handleLogin = async user => {
    try {
      const response = await userLogin(user);
      let userInfo = response.data.userInfo;
      localStorage.setItem("email", userInfo.email);
      setAuth({ userInfo });
      setPersist(true);
      navigate("/select-team");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", true);
  }, []);

  return (
    <section class="bg-gray-800 text-white flex flex-col items-center justify-end w-screen h-screen pb-20">
      <div style={{ textAlign: "center" }}>
        <h1>Cancheros</h1>
        <p>El historial de tus partidos</p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Completa tu email";
          }
          if (!values.password) {
            errors.password = "Completa tu contraseña";
          }
        }}
        onSubmit={async valores => {
          await handleLogin(valores);
        }}>
        {() => (
          <Form class="flex flex-col gap-4 p-4 w-[80%] lg:max-w-[470px]">
            <div class="flex flex-col ">
              <Label htmlFor="email" content="Email" />
              <Field
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div class="flex flex-col">
              <Label htmlFor="password" content="Password" />
              <Field
                type="password"
                name="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button type="submit" func="primary" label="INGRESAR" />
          </Form>
        )}
      </Formik>

      <Button
        others={`mt-2`}
        onClick={() => navigate("/signup")}
        label="Aún no tienes cuenta?"
      />
    </section>
  );
};

export default Login;
