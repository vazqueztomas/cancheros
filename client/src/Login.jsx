import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { userLogin } from "../services/services";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/AuthProvider";
import Label from "./components/Label";
import Button from "./components/Button";
import EscudoAfa from './components/EscudoAfa'
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { setAuth, setPersist } = myContext();
  const [error , setError] = useState(null);

  const handleLogin = async user => {
    try {
      const response = await userLogin(user);
      const userInfo = response.data.userInfo;
      localStorage.setItem("email", userInfo.email);
      setAuth({ userInfo });
      setPersist(true);
      navigate("/select-team");
    } catch (error) {
      setError(error.response.data)
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", true);
  }, []);

  return (
    <section class="bg-gray-800 text-white flex flex-col items-center justify-end w-screen h-screen pb-20">
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {}
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
          <Form class="flex flex-col items-center max-w-[350px] gap-2 p-4 w-full  border">
            <EscudoAfa/>
            <div class="flex flex-col w-full">
              <Field
                placeholder = 'Email'
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              />
            </div>

            <div class="flex flex-col w-full">
              <Field
                placeholder = 'Contraseña'
                type="password"
                name="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              />
            </div>
            <Button type="submit" func="primary" label="INGRESAR" others = 'w-full'/>
          </Form>
        )}
      </Formik>
      {error ? <div class = 'text-red-600'>{error}</div> : null}
      <Button
        others={`mt-2`}
        onClick={() => navigate("/signup")}
        label="Aún no tienes cuenta?"
      />
    </section>
  );
};

export default Login;
