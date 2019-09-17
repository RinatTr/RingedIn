import axios from 'axios';

//API calls
export const getAllWords = () => { return axios.get(`/words`) }

//Util functions
export const getRandomWord = (words) => {
  let randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx]
}
