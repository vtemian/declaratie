import AutosizeInput from "react-input-autosize";
import styled from "styled-components";

import { color, fontSize, fontFamily } from "../helpers/constants";

const Input = styled(AutosizeInput)`
  padding: 5px;
  margin: 0 10px;
  border-bottom: 1px solid ${color.black};
  input {
    text-transform: uppercase;
    font-size: ${fontSize.large};
    font-family: ${fontFamily.sansSerif};
  }
`;

export default Input;
