import type { Meta, StoryObj } from "@storybook/vue3-vite";
import UiButton from "./UiButton.vue";

const meta = {
  title: "Компоненты/UiButton",
  component: UiButton,
  tags: ["autodocs"],
  args: {
    default: "Сохранить",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    default: {
      control: "text",
      description: "Содержимое кнопки",
    },
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Loading: Story = {
  args: { loading: true },
};
