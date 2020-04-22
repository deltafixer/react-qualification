import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Spinner from "./index";

let wrapper: ShallowWrapper;

describe("Spinner component tests", () => {
  beforeAll(() => {
    wrapper = shallow(<Spinner />);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
