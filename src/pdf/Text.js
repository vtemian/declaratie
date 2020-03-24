import styled from "@react-pdf/styled-components";
import PropTypes from "prop-types";

import { fontSize, fontWeight } from "../helpers/constants";


const Text = styled.Text`
  line-height: 2;
  font-size: ${({ textSize }) => fontSize[textSize]};
  font-weight: ${({ textWeight }) => fontWeight[textWeight]};
`;

Text.propTypes = {
  textSize: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  textWeight: PropTypes.oneOf(["regular", "bold"]),
};

Text.defaultProps = {
  textSize: "tiny",
  textWeight: "regular",
};

export default Text;
