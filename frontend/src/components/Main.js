import React, { Component } from 'react';
import * as Util from '../util/util.js';
import Word from './Word.js';
import WrongGuesses from './WrongGuesses.js';
import Rings from './Rings.js';
import Blop from '../assets/blop.wav';
import Chime from '../assets/chime.mp3';
import '../css/Main.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {  userInput: "",
                    currWord: [],
                    currDisplay: [],
                    invalidInput: false,
                    wrongGuesses: [],
                    result: {} }
    this.handleNewGame = this.handleNewGame.bind(this);
    this.blop = new Audio(Blop);
    this.chime = new Audio(Chime);
  }

  async componentDidMount() {
    let { currDisplay, randomWord } = await Util.initGame();
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
    let { userInput, currWord, currDisplay, wrongGuesses, invalidInput, result } = this.state;
    if (!invalidInput && !result.isEnd) {
      let guess = Util.processGuess(userInput, currWord, currDisplay);
      (guess.isWrongGuess ? this.blop : this.chime).play();
      this.setState({
        userInput: "",
        currDisplay: guess.newDisplay,
        wrongGuesses: guess.isWrongGuess ? [ ...wrongGuesses, userInput] : [...wrongGuesses]
      }, this.handleEnd )
    }
  }

  handleEnd = () => {
    let { currWord, currDisplay, wrongGuesses } = this.state;
    let result = Util.processEnd(wrongGuesses, currWord, currDisplay);
    this.setState({ result,
                    currDisplay: result.isEnd ? currWord : currDisplay });
  }

  async handleNewGame() {
    let { currDisplay, randomWord } = await Util.initGame();
    this.setState({
      currWord: randomWord.split(''),
      userInput: "",
      currDisplay,
      invalidInput: false,
      wrongGuesses: [],
      result: {}
    })
  }

  render() {
    let { userInput, currDisplay, invalidInput, wrongGuesses, result } = this.state;
    return (
      <>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label>Your Guess:</label>
            <input name="user-input" type="text" value={userInput} onChange={this.handleUserInput} />
            <div className="invalid-display">{invalidInput && userInput !== "" ? "*please input one letter" : ""}</div>
            <button type="submit">Guess</button>
          </form>
        </div>
        <div className="display-word-wrapper">
          {currDisplay ? <Word  currDisplay={currDisplay}
                                result={result} /> : ""}
        </div>
        <div className="display-guesses-wrapper">
          <div className="guesses-left-container">
            Guesses Left: {6 - wrongGuesses.length}
          </div>
          <div className="wrong-guesses-container">
            Wrong Guesses: { <WrongGuesses wrongGuesses={wrongGuesses} /> }
          </div>
        </div>
        <div className="rings-wrapper">
          <Rings  count={wrongGuesses.length}
                  result={result} />
        </div>
        <div className="game-button-wrapper">
          {result.isEnd ? <button onClick={this.handleNewGame}>New Game</button> : ""}
        </div>
      </>
    )
  }
}

export default Main;
