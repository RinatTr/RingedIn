import React, { Component } from 'react';
import * as Util from '../util/util.js';
import Word from './Word.js';
import WrongGuesses from './WrongGuesses.js';
import Rings from './Rings.js';
import Slider from './Slider.js';
import Blop from '../assets/blop.wav';
import Chime from '../assets/chime.mp3';
import '../css/Main.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {  userInput: "",
                    difficulty: 1,
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
    let { currDisplay, randomWord } = await Util.initGame(this.state.difficulty);
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
    let { currDisplay, randomWord } = await Util.initGame(this.state.difficulty);
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
    let { userInput, currDisplay, invalidInput, wrongGuesses, result, difficulty } = this.state;
    return (
      <>
        <div className="left-col">
        </div>
        <div className="center-col">
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <label>Your Guess:</label>
              <input name="user-input" type="text" value={userInput} onChange={this.handleUserInput} />
              <button type="submit">GUESS</button>
            </form>
          </div>
          <div className="display-word-wrapper">
            {currDisplay ? <Word  currDisplay={currDisplay}
                                  result={result} /> : ""}
          </div>
          <div className="rings-wrapper">
            <Rings  count={wrongGuesses.length}
                    result={result} />
          </div>
        </div>
        <div className="right-col">
          <div className="invalid-display">{invalidInput && userInput !== "" ? "*please input one letter" : ""}</div>
          <div className="display-guesses-wrapper">
            <div className="guesses-left-container">
              Guesses Left: {6 - wrongGuesses.length}
            </div>
            <div className="wrong-guesses-container">
              Wrong Guesses: { <WrongGuesses wrongGuesses={wrongGuesses} /> }
            </div>
          </div>
          { result.isEnd ?
            <>
              <p>Try again? .. choose difficulty:</p>
              <div className="slider-wrapper">
                <span>Easy</span>
                <Slider id="difficulty" value={difficulty} min="1" max="10" handleChange={this.handleChange}/>
                <span>Hard</span>
              </div>
              <div className="game-button-wrapper">
                <button onClick={this.handleNewGame}>NEW GAME</button>
              </div>
            </> : "" }
        </div>
      </>
    )
  }
}

export default Main;
