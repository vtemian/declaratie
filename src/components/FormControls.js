import React from "react";
import { useField } from "formik";
import styled from "styled-components";

import { color, spacing } from "../helpers/constants";

import TextField from "./TextField";

export const FTF = props => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return <TextField hasError={Boolean(meta.touched && meta.error)} {...field} {...props} />;
};

const Input = styled.input`
  visibility: hidden;
  position: absolute;
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
  margin-bottom: ${spacing.small};
`;

const Checkbox = styled(({ hasError, ...props }) => <span {...props} />)`
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid;
  border-color: ${({ hasError }) => (hasError ? color.red : color.black)};
  margin-right: ${spacing.small};
  background-color: ${({ checked }) => (checked ? color.black : color.white)};
`;

export const FCK = ({ children, hasError, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Label style={{ border: hasError ? "1px solid red" : "" }}>
        <Checkbox hasError={Boolean(meta.touched && meta.error)} checked={field.checked} />
        <Input type="checkbox" {...field} {...props} />
        {children}
      </Label>
    </>
  );
};
