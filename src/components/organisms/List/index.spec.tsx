import React from "react";
import { mount, ReactWrapper } from "enzyme";
import List, { ListProps } from "./index";

let wrapper: ReactWrapper;

jest.mock("../../molecules/ListItem", () => () => <div />);

const props: ListProps = {
  items: [
    {
      name: "name1",
      updated_at: "2020-01-01",
      created_at: "2020-01-01",
      owner: {
        avatar_url: "",
      },
    },
    {
      name: "name2",
      updated_at: "2020-01-03",
      created_at: "2020-01-01",
      owner: {
        avatar_url: "",
      },
    },
    {
      name: "name3",
      updated_at: "2020-01-02",
      created_at: "2020-01-01",
      owner: {
        avatar_url: "",
      },
    },
    {
      name: "value4",
      updated_at: "2020-01-02",
      created_at: "2020-01-01",
      owner: {
        avatar_url: "",
      },
    },
  ],
  itemFilter: "name",
  resultCount: jest.fn(),
};

describe("List component tests", () => {
  beforeAll(() => {
    wrapper = mount(<List {...props} />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("renders correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
