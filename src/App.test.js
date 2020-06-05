import React from "react";
import { mount } from "enzyme";
import App from "./App";

import { findByTestAttr } from "../test/testUtils";

import hooksAction from "./Actions/hooksAction";

const mockGetSecretWord = jest.fn();

const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hooksAction.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);

  React.useReducer = mockUseReducer;

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
  it("secretWord wont get called on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is not NULL", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  });

  it("renders app when secretWord is not null", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(true);
  });
  it("does not render spinner when secretWord is not null", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("secretWord is NULL", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });

  it("renders app when secretWord is not null", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(false);
  });
  it("renders spinner when secretWord is null", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(true);
  });
});