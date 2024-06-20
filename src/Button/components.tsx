import React from "react";

import type { ButtonProps } from "./components.types";

import { StyledButton } from "./styled";

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type,
  ...arg
}) => (
  <StyledButton href={href} type={type || (href ? "link" : "default")} {...arg}>
    {children}
  </StyledButton>
);
