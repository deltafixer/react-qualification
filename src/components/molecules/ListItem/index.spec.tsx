import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ListItem, { ListItemProps } from "./index";

let wrapper: ShallowWrapper;

Date.now = jest.fn(() => 1482363367071);

const props: ListItemProps = {
  name: "Random name",
  avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
  created_at: Date.now().toString(),
  updated_at: Date.now().toString(),
};

describe("ListItem component tests", () => {
  beforeAll(() => {
    wrapper = shallow(<ListItem {...props} />);
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
