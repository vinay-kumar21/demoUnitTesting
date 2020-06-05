import React from "react";
import { mount } from "enzyme";
import App from "./App";

import { findByTestAttr } from "../test/testUtils";

import hooksAction from "./Actions/hooksAction";

const mockGetSecretWord = jest.fn();

const setup = (secretWord="party") => {
    mockGetSecretWord.mockClear();
  hooksAction.getSecretWord = mockGetSecretWord;

  return mount(<App />);
};

it("App render without any error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

describe("getSecretWord Calls", () => {
  it("getSecretWord calls on App mount", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
