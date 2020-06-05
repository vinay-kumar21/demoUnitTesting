import axios from "axios";

export const getSecretWord = async(secretWord) => {
const response = await axios('http://localhost:3030');
secretWord(response.data);
};

export default {
    getSecretWord
  
};
