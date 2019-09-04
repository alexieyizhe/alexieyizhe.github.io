import React from "react";
import styled from "styled-components";

import Icon, { IconProps } from "~components/Icon";
import { Size } from "~src/theme";

export interface ButtonProps extends IconProps {
  disabled?: boolean;
}

const Container = styled.button<{ disabled?: boolean }>`
  border-radius: 50%;
  width: 60px;
  height: 60px;

  padding: 5px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: ${({ theme }) => theme.boxShadow.main};

  transition: transform 150ms ease-in;
  &:hover,
  &:focus,
  &:focus-within {
    transform: translateY(${({ disabled }) => (disabled ? "0" : "-2px")});
  }
`;

const Button: React.FC<ButtonProps> = ({
  name,
  color,
  disabled,
  onClick,
  ...rest
}) => (
  <Container onClick={onClick} disabled={disabled} {...rest}>
    <Icon
      name={name}
      color={disabled ? "greyMedium" : color}
      size={Size.MEDIUM}
    />
  </Container>
);

export default Button;
