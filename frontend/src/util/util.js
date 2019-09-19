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
        nullCount++;
        return currDisplay[i];
      } else {
        nullCount++;
        return null;
      }
    })
  isWrongGuess = (nullCount === currWord.length)
  return { isWrongGuess, newDisplay }
}

export const processEnd = (wrongGuesses, currWord, currDisplay) => {
  let result = { isWin: currWord.join('') === currDisplay.join('') && currWord.length,
                 isLose: wrongGuesses.length === 6 };
  result.isEnd = result.isWin || result.isLose;
  return result;
}

export async function initGame() {
  let currDisplay, randomWord;
  try {
    let getWords = await getAllWords();
    randomWord = getRandomWord(getWords.data.split('\n'))
  } catch (e) {
    console.log("error getting words from API", e)
  }
  currDisplay = new Array(randomWord.length).fill(null);
  return { currDisplay, randomWord }
}
