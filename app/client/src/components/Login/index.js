import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import styles from "./Login.modules.css"

function App() {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error("There was an error logging in!", error);
    });
  };

  const handleClickCadastro = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error("There was an error registering!", error);
    });
  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres")
      .required("Este campo é obrigatório"),
  });

  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres")
      .required("Este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais")
      .required("Este campo é obrigatório"),
  });

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form">
            <Field className="form-field" name="email" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />

            <Field
              className="form-field"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={handleClickCadastro}
        validationSchema={validationCadastro}
      >
        <Form className="login-form">
          <div className="login-form">
            <Field className="form-field" name="email" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />

            <Field
              className="form-field"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />

            <Field
              className="form-field"
              name="confirmPassword"
              placeholder="Confirme sua senha"
            />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">
            Cadastar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
