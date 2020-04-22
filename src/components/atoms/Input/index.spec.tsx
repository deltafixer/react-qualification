import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Input from "./index";
import { StyledInput } from "./index.styles";

let wrapper: ShallowWrapper;

const props = {
  onChange: jest.fn(),
};

describe("Input component tests", () => {
  beforeAll(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("triggers callback when 'change' event catched on input field", () => {
    wrapper.find(StyledInput).simulate("change", {
      target: {
        value: "some text",
      },
    });

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
