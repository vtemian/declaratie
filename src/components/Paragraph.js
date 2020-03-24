import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, fontFamily, fontSize } from "../helpers/constants";

const Paragraph = styled.div`
  line-height: 2;
  font-size: ${fontSize.small};
  font-family: ${fontFamily.sansSerif};
  margin-bottom: ${({ bottom }) => spacing[bottom]};
`;

Paragraph.propTypes = {
  bottom: PropTypes.oneOf(["initial", "small", "medium", "large"]),
};

Paragraph.defaultProps = {
  bottom: "large",
};

export default Paragraph;
