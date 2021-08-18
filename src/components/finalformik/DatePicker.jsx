import { ErrorMessage, Field } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorText } from "../codevolution/ErrorText";
import DateView from "react-datepicker";

export const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(m) => setFieldValue(name, m)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
