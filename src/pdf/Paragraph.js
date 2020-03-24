import PropTypes from "prop-types";
import styled from "@react-pdf/styled-components";

import { spacing } from "../helpers/constants";


const Paragraph = styled.View`
  margin: 0 0 ${({ bottom }) => spacing[bottom]} 0;
`;

Paragraph.propTypes = {
  bottom: PropTypes.oneOf(["initial", "small", "medium", "large"]),
};

Paragraph.defaultProps = {
  bottom: "large",
};

export default Paragraph;
