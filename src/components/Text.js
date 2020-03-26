import PropTypes from "prop-types";
import styled from "styled-components";

import { fontSize, fontFamily, fontWeight } from "../helpers/constants";

const Text = styled.span`
  line-height: 1.4;
  font-family: ${fontFamily.sansSerif};
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ weight }) => fontWeight[weight]};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "initial")};
`;

Text.propTypes = {
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf(["regular", "bold"]),
  size: PropTypes.oneOf(["medium", "small"]),
};

Text.defaultProps = {
  weight: "regular",
};

export default Text;
