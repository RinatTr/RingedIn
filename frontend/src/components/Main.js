import React, { Component } from 'react';
import * as Util from '../util/util.js';

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
    console.log(this.state.currDisplay, this.state.currWord)
    return (
      <form>
        <input name="user-input" type="text" value={this.state.userInput} onChange={this.handleUserInput} />
      </form>
    )
  }
}

export default Main;
