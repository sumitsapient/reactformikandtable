import React from "react";
import { ErrorMessage, Field } from "formik";
import { ErrorText } from "../codevolution/ErrorText";

export const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>

      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
