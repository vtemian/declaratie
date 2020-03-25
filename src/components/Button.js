import styled from "styled-components";

import { color, spacing, borderRadius, fontFamily, fontSize } from "../helpers/constants";

const Button = styled.button`
  cursor: pointer;
  color: ${color.white};
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.large};
  background-color: ${color.black};
  border-radius: ${borderRadius.large};
  padding: ${spacing.small} ${spacing.large};
`;

const LightButton = styled.button`
  color: ${color.black};
  background-color: ${color.white};
  border: 1px solid ${color.black};
  cursor: pointer;
  padding: ${spacing.extraSmall} ${spacing.small};
  border-radius: ${borderRadius.small};
  font-size: ${fontSize.medium};
  &:hover{
    background-color: ${color.black};
    color: ${color.white};
  }
`;

export { LightButton, Button };
