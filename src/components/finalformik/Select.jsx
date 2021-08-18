import React from "react";
import { ErrorMessage, Field } from "formik";
import { ErrorText } from "../codevolution/ErrorText";

export const Select = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>

      <Field
        as="select"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((m) => {
          return (
            <option key={m.value} value={m.value}>
              {m.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
