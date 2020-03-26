import PropTypes from "prop-types";
import styled from "styled-components";

import { color, fontWeight, borderRadius } from "../helpers/constants";

const TextField = styled.input`
  padding: 5px 10px;
  text-transform: uppercase;
  border: 1px solid ${color.black};
  font-weight: ${fontWeight.bold};
  border-radius: ${borderRadius.small};
`;

export default TextField;
