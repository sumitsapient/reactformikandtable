import React from "react";
import { ErrorMessage, Field } from "formik";
import { ErrorText } from "../codevolution/ErrorText";

export const CheckBox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-group mt-2">
      <label htmlFor={name}>{label} </label>

      <Field className="form-control" name={name} {...rest}>
        {({ field }) => {
          return options.map((m) => {
            return (
              <React.Fragment key={m.value}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={m.value}
                    {...field}
                    value={m.value}
                    checked={field.value.includes(m.value)}
                  ></input>
                  <label className="form-check-label" htmlFor={m.value}>
                    {m.key}
                  </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
