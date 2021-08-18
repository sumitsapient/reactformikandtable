import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export const FormikContainer = () => {
  const dropdown = [
    { key: "Select", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radio = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const check = [
    { key: "Value 1", value: "option1" },
    { key: "Value 2", value: "option2" },
    { key: "Value 3", value: "option3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!"),
    description: Yup.string().required("Required!"),
    selectOption: Yup.string().required("Required!"),
    radioOption: Yup.string().required("Required!"),
    checkBoxOption: Yup.array().min(1).required(),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container w-50 mt-5 rounded bg-light p-3 fw-light fs-6">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              name="email"
              label="Email Address"
              type="email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdown}
            />
            <FormikControl
              control="radio"
              label="Radio Topic"
              name="radioOption"
              options={radio}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox Topic"
              name="checkBoxOption"
              options={check}
            />
            <FormikControl control="date" label="Birth Date" name="birthDate" />

            <button type="submit" className="btn btn-primary btn-sm mt-3">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
