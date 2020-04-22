import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

let wrapper: ShallowWrapper;

describe("App component tests", () => {
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
