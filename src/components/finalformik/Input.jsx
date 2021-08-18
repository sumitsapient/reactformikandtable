import { ErrorMessage, Field } from "formik";
import React from "react";
import { ErrorText } from "../codevolution/ErrorText";

export const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>

      <Field className="form-control" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
