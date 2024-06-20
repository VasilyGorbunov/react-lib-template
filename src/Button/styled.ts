import styled, { css } from "styled-components";
import { Button } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";


export const StyledButton: typeof Button = styled(Button)`
  height: unset;
  padding: 0;
    
    ${({ href }) =>
  !href &&
  css`
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      height: 45px;
      column-gap: 10px;
      padding: 10px 22px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 0;
      box-shadow: none;
      font-weight: 600;`}

`
