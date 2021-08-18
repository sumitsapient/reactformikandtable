import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikControl } from "../FormikControl";

export const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string().required("Required!"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container w-25 mt-5 rounded bg-light p-3 fw-light fs-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="Enter e-mail"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="Enter password"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary btn-sm mt-3"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
