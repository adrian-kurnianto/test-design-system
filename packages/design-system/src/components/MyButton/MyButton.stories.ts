import MyButton from "./MyButton.vue";

export default {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    color: {
      control: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "error",
        ],
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
  },
};

//@ts-ignore
const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" content="click me"/>',
});

export const Primary = Template.bind({});
//@ts-ignore
Primary.args = {
  color: "success",
};

export const Secondary = Template.bind({});
//@ts-ignore
Secondary.args = {
  color: "secondary",
};

export const WithLoading = Template.bind({});
//@ts-ignore
WithLoading.args = {
  color: "error",
  loading: true,
};