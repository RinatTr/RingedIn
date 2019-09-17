import React, { Component } from 'react';
import * as Util from '../util/util.js';
import Word from './Word.js';
import '../css/Main.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {  userInput: "",
                    currWord: [],
                    currDisplay: [] }
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
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {

  }

  render() {
    let { userInput, currDisplay } = this.state;
    return (
      <>
        <div className="form-wrapper">
        <form>
          <input name="user-input" type="text" value={this.state.userInput} onChange={this.handleUserInput} />
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
