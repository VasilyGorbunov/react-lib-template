import { ReactNode } from "react";
import type { ButtonProps as AntdButtonProps } from "antd";

export type ButtonProps = AntdButtonProps & {
  children?: ReactNode;
};
