import React from "react";
import "./App.css";
import hooksAction from "./Actions/hooksAction";

function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid Action type passed ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  React.useEffect(
    () => { hooksAction.getSecretWord(setSecretWord)}, []);

  return <div data-test="component-app" />;
}

export default App;
