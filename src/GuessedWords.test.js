import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "trian",
      letterMatchCount: 3
    }
  ]
};

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

describe("GuessedWords Componemt", () => {
  describe("Checking Props Types", () => {
    it("Does Not throw warning with expected props", () => {
      checkProps(GuessedWords, defaultProps);
    });
  });
  describe("If there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ guessedWords: [] });
    });
    it("Render with out error", () => {
      const Component = findByTestAttr(wrapper, "component-guessed-word");
      expect(Component.length).toBe(1);
    });
    it("Render instruction to guess a word", () => {
      const instruction = findByTestAttr(wrapper, "instruction-text");
      expect(instruction.text().length).not.toBe(0);
    });
  });
  describe("If there are no words guessed", () => {
    let wrapper;
    const guessedWords = [
      {
        guessedWord: "train",
        letterMatchCount: 3
      },
      {
        guessedWord: "agile",
        letterMatchCount: 1
      },
      {
        guessedWord: "party",
        letterMatchCount: 5
      }
    ];

    beforeEach(() => {
      wrapper = setUp({ guessedWords });
    });
    it("Render with out error", () => {
      const Component = findByTestAttr(wrapper, "component-guessed-word");
      expect(Component.length).toBe(1);
    });
    it("Render 'Guessed word' section ", () => {
      const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
      expect(guessedWordNode.length).toBe(1);
    });
    it("Correct number of 'Guessed word'  ", () => {
      const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
  });
});
