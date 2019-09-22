import axios from 'axios';

//API calls
export const getAllWords = (diff, len) => { return axios.get(`/words?difficulty=${diff}&minLength=${len}&maxLength=${len + 1}`) }

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

export const isValidNewGame = (res) => {
  //if response came back empty, user encouraged to adjust category
  return res.length ? true : false;
}

export async function initGame(diff, len) {
  let currDisplay, randomWord;
  try {
    let getWords = await getAllWords(diff, parseInt(len));
    randomWord = getRandomWord(getWords.data.split('\n'))
  } catch (e) {
    console.log("error getting words from API", e)
  }
  currDisplay = new Array(randomWord.length).fill(null);
  return { currDisplay, randomWord };
}
