import { Form, Formik } from "formik";
import React from "react";
import Loader from "react-loader-spinner";
import  { useState } from 'react'


import * as Yup from "yup";
import { MyLoader } from "../../MyLoader";
import { FormikControl } from "../FormikControl";


export const RegistrationForm = () => {

  const [loading, setLoading] = useState(false)
  const moc = [
    { key: "Email", value: "emailmoc" },
    { key: "Phone", value: "phonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Requied"),
    phone: Yup.string().when("modeOfContact", {
      is: "phonemoc",
      then: Yup.string().required("Required"),
    }),
  });
  const onSubmit = (values) => {
    setLoading(true);
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
                label="Enter mail"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="Enter password"
              />
              <FormikControl
                control="input"
                type="password"
                name="confirmPassword"
                label="Confirm password"
              />
              <FormikControl
                control="radio"
                name="modeOfContact"
                label="Contact By"
                options={moc}
              />
              <FormikControl
                control="input"
                type="text"
                name="phone"
                label="Contact No"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn btn-primary btn-sm mt-3"
              >
                Submit
              </button>
              {loading&&<MyLoader/>}
            </Form>
            
          );
        }}
      </Formik>
    </div>
  );
};
