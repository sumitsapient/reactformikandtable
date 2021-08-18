import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikControl } from "../FormikControl";

export const CourseEnrollment = () => {
  const courseDropdown = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const skillDropdown = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    bio: Yup.string().required("Required!"),
    course: Yup.string().required("Required!"),
    courseDate: Yup.date().required("Required").nullable(),
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
              <FormikControl control="textarea" name="bio" label="Bio" />
              <FormikControl
                control="select"
                name="course"
                label="Select course"
                options={courseDropdown}
              />
              <FormikControl
                control="checkbox"
                name="skills"
                label="Choose skill"
                options={skillDropdown}
              />
              <FormikControl control="date" name="courseDate" label="Date" />
              <button
                type="submit"
                className="btn btn-primary btn-sm mt-3"
                disabled={!formik.isValid}
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
