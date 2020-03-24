import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
  text-align: ${({ align }) => align};
`;

Text.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center", "initial"]),
};

Text.defaultProps = {
  align: "initial",
};

export default Text;
