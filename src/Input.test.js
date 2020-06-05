import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

import { findByTestAttr, checkProps } from "../test/testUtils";

const setup = (secretWord = "Party") => {
  const wrapper = shallow(<Input secretWord={secretWord} />);
  return wrapper;
};

describe("Input Component", () => {
  const defaultProps = {
    secretWord: "Train"
  };

  it("Checking Prop types", () => {
    checkProps(Input, defaultProps);
  });
  it("render without any error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-input");
    expect(appComponent.length).toBe(1);
  });

  describe("Mocking setState Function", () => {

    let mockSetCurrentGuess = jest.fn();
    let wrapper;

    beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
      wrapper = setup();
    });

    it("state update on input value change", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      const mockEvent = { target: { value: "train" } };
      inputBox.simulate("change", mockEvent);
      expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });

    it("Field is cleared upon submit button click", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      submitButton.simulate("click",{preventDefault(){}});
      expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
  });
});
