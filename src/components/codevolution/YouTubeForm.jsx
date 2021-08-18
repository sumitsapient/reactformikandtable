import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";

import * as Yup from "yup";
import { ErrorText } from "./ErrorText";
import React, { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: { facebook: "", twitter: "" },
  phone: ["", ""],
  phoneNumbers: [""],
};
const load = {
  name: "Sumit",
  email: "sumit@example.com",
  channel: "UFC",
  comments: "Welcome to UFC kid!",
  social: { facebook: "", twitter: "" },
  phone: ["", ""],
  phoneNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

const customTwiterValidate = (m) => {
  let error;
  if (!m) {
    error = "Required";
  }
  return error;
};

export const YouTubeForm = () => {
  const [savedValue, setSavedValue] = useState(null);
  return (
    <Formik
      initialValues={savedValue || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className="container w-50 mt-5 rounded bg-light p-3 fw-light fs-6">
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name </label>

                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component={ErrorText} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email" component={ErrorText} />
              </div>
              <div className="form-group">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  className="form-control"
                  id="channel"
                  name="channel"
                />
                <ErrorMessage name="channel" component={ErrorText} />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  className="form-control"
                  id="comments"
                  name="comments"
                />
                <ErrorMessage name="comments">
                  {(m) => <div className="text-danger fw-light">{m}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Facebook Profile</label>
                <Field
                  className="form-control"
                  id="facebook"
                  name="social.facebook"
                />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Twitter Profile</label>
                <Field
                  className="form-control"
                  id="twitter"
                  name="social.twitter"
                  validate={customTwiterValidate}
                />
                <ErrorMessage name="social.twitter" component={ErrorText} />
              </div>
              <div className="form-group">
                <label htmlFor="primary">Primary Contact No</label>
                <Field className="form-control" id="primary" name="phone[0]" />
              </div>
              <div className="form-group">
                <label htmlFor="secondary">Secondary Contact No</label>
                <Field
                  className="form-control"
                  id="secondary"
                  name="phone[1]"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumbers">PhoneNumbers</label>
                <FieldArray className="form-control" name="phoneNumbers">
                  {(props) => {
                    const { push, remove, form } = props;
                    const { values } = form;
                    const { phoneNumbers } = values;
                    return (
                      <div>
                        {phoneNumbers.map((m, index) => {
                          return (
                            <div key={index}>
                              <Field
                                className="form-group"
                                name={`phoneNumbers[${index}]`}
                              />
                              <button
                                className="btn btn-success btn-sm ms-2"
                                onClick={() => push("")}
                              >
                                +
                              </button>
                              {index > 0 && (
                                <button
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="btn btn-primary mt-3"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => formik.validateField("comments")}
                className="btn btn-outline-dark mt-3 ms-2"
              >
                ValidateCmments
              </button>
              <button
                type="button"
                onClick={() => formik.validateForm()}
                className="btn btn-outline-info mt-3 ms-2"
              >
                Validate All
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldTouched("comments")}
                className="btn btn-outline-info mt-3 ms-2"
              >
                Visit Comments
              </button>
              <button
                type="button"
                onClick={() =>
                  formik.setTouched({ name: true, email: true, comments: true })
                }
                className="btn btn-outline-dark mt-3 ms-2"
              >
                Visit Fields
              </button>
              <button
                type="button"
                onClick={() => {
                  setSavedValue(load);
                }}
                className="btn btn-dark mt-3 ms-2"
              >
                Load
              </button>
              <button type="reset" className="btn btn-dark mt-3 ms-2">
                Reset
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
