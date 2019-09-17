import axios from 'axios';

//API calls
export const getAllWords = () => { return axios.get(`/words`) }

//Util functions
export const getRandomWord = (words) => {
  let randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx]
}

export const isInvalidInput = (input) => {
  let validChars = "abcdefghijklmnopqrstuvwxyz".split('');
  return (!validChars.includes(input) || input.length > 1)
}

export const processGuess = (userInput, currWord, currDisplay) => {
  let newDisplay, nullCount = 0, isWrongGuess;
  newDisplay = currWord.map((letter, i) => {
      if (letter === userInput) {
        return letter;
      } else if (currDisplay[i]) {
        return currDisplay[i];
      } else {
        nullCount++;
        return null;
      }
    })
  isWrongGuess = (nullCount === currWord.length)
  return { isWrongGuess, newDisplay }
}
