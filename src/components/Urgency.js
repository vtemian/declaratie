import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color, spacing } from "../helpers/constants";

const Label = styled.label`
  display: block;
  cursor: pointer;
  margin: 0 0 ${spacing.small} ${spacing.medium};
`;

const Input = styled.input`
  visibility: hidden;
  position: absolute;
`;

const Checkbox = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid ${color.black};
  margin-right: ${spacing.small};
  background-color: ${({ checked }) => (checked ? color.black : color.white)};
`;

function Urgency({ children, name, checked, onCheck }) {
  return (
    <Label>
      <Checkbox checked={checked} />
      <Input type="checkbox" name={name} checked={checked} onChange={onCheck} />
      {children}
    </Label>
  );
}

Urgency.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
};

export default Urgency;
