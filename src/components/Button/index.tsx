import React from "react";
import styled from "styled-components";

import Icon, { IconProps } from "~components/Icon";
import { Size } from "~src/theme";

export interface ButtonProps extends IconProps {}

const Container = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;

  padding: 5px;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow.main};

  transition: transform 150ms ease-in;
  cursor: pointer;
  &:hover,
  &:focus,
  &:focus-within {
    transform: translateY(-2px);
  }
`;

const Button: React.FC<ButtonProps> = ({ name, color, onClick, ...rest }) => (
  <Container onClick={onClick} {...rest}>
    <Icon name={name} color={color} size={Size.MEDIUM} />
  </Container>
);

export default Button;