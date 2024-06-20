import { SearchOutlined } from "@ant-design/icons";
import { Button as AntdButton, Divider, Typography } from "antd";

import { Button } from ".";

//@ts-ignore
export const Component = ({ icon, ...arg }) => {
  return (
    <>
      <Typography.Title>Button</Typography.Title>
      <AntdButton type="link" href="https://ant.design/components/button/">
        Документация AntD
      </AntdButton>
      <Divider />

      <Button icon={icon ? <SearchOutlined /> : ""} {...arg}>
        Next
      </Button>
    </>
  );
};

export default {
  title: "Button",
  argTypes: {
    icon: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      options: ["large", "default", "small"],
      control: { type: "radio" },
    },
    type: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
    href: { control: "text" },
  },
};
