import axios from 'axios';

//API calls
export const getAllWords = axios.get(`http://app.linkedin-reach.io/words`)

//Util functions
export const getRandomWord = (words) => {
  let randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx]
}
