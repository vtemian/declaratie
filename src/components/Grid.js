import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing } from "../helpers/constants";

const Grid = styled.div`
  display: grid;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  grid-column-gap: ${({ gap }) => gap};
  grid-template-rows: ${({ rows }) => rows};
  grid-template-columns: ${({ columns }) => columns};
`;

Grid.propTypes = {
  gap: PropTypes.string,
  rows: PropTypes.string,
  columns: PropTypes.string,
  align: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
  justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "initial", "inherit"]),
};

Grid.defaultProps = {
  columns: "auto",
  gap: spacing.small,
  align: "flex-start",
  justify: "space-between",
};

export default Grid;
