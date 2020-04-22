import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Repos from "./index";
import { act } from "react-dom/test-utils";

// mocking utils functions, trivial...
// debounce had to be cut off setTimeout due to Jest not waiting!
jest.mock("../../../utils/api", () => ({
  fetchMyRepos: () => {
    return Promise.resolve([]);
  },
}));

jest.mock("../../../utils/defaults", () => ({
  debounce: (func: any) => {
    return (...args: any) => {
      func(...args);
    };
  },
}));

jest.useFakeTimers();

describe("List component tests", () => {
  let wrapper: ReactWrapper;

  beforeAll(async () => {
    await act(async () => {
      wrapper = mount(<Repos />);
    });
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("runs debounce function when onChange event triggered via Input", () => {
    wrapper.update();
    wrapper.find("input").simulate("change", {
      target: {
        value: "some text",
      },
    });
  });
});
