import React, { Component } from 'react';
import { getAllWords, getRandomWord } from '../util/util.js';

class Main extends Component {
  constructor() {
    super()
    this.state = {  userInput: "",
                    currWord: [],
                    currDisplay: [] }
  }

  componentDidMount() {
    // get a random word (util function that outputs a word)

    // var currWord is splited word
    // var currDisplay is array.fill with nulls in length of currWord
    // set state to currWord and currDisplay
  }
  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {

  }

  render() {
    return (
      <form>
        <input name="user-input" type="text" value={this.state.userInput} onChange={this.handleUserInput} />
      </form>
    )
  }
}

export default Main;
