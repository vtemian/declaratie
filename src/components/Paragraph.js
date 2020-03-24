import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, fontFamily, fontSize } from "../helpers/constants";

const Paragraph = styled.div`
  line-height: 2;
  font-family: ${fontFamily.sansSerif};
  font-size: ${({ textSize }) => fontSize[textSize]};
  margin-bottom: ${({ bottom }) => spacing[bottom]};
`;

Paragraph.propTypes = {
  textSize: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  bottom: PropTypes.oneOf(["initial", "small", "medium", "large"]),
};

Paragraph.defaultProps = {
  size: "small",
  bottom: "large",
};

export default Paragraph;
