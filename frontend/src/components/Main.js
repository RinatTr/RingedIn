import React, { Component } from 'react';
import * as Util from '../util/util.js';
import Word from './Word.js';
import '../css/Main.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {  userInput: "",
                    currWord: [],
                    currDisplay: [],
                    invalidInput: false,
                    wrongCount: 0 }
  }

  async componentDidMount() {
    let currDisplay, randomWord;
    try {
      let getWords = await Util.getAllWords();
      randomWord = Util.getRandomWord(getWords.data.split('\n'))
    } catch (e) {
      console.log("error getting words from API", e)
    }
    currDisplay = new Array(randomWord.length).fill(null);
    this.setState({
      currWord: randomWord.split(''),
      currDisplay
    })
  }

  handleUserInput = (e) => {
    let userInput = e.target.value.toLowerCase();
    let invalidInput = Util.isInvalidInput(userInput);
    this.setState({
      userInput, invalidInput
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { userInput, currWord, currDisplay, wrongCount } = this.state;
    let guess = Util.processGuess(userInput, currWord, currDisplay);
    this.setState({
      currDisplay: guess.newDisplay,
      wrongCount: guess.isWrongGuess ? wrongCount + 1 : wrongCount,
      userInput: ""
    })
  }

  render() {
    let { userInput, currDisplay, invalidInput } = this.state;
    return (
      <>
        <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input name="user-input" type="text" value={userInput} onChange={this.handleUserInput} />
          <div className="invalid-display">{invalidInput && userInput !== "" ? "*please input one letter" : ""}</div>
          <button type="submit">Guess</button>
        </form>
        </div>
        <div className="display-word-wrapper">
          {currDisplay ? <Word currDisplay={currDisplay} /> : ""}
        </div>
      </>
    )
  }
}

export default Main;
