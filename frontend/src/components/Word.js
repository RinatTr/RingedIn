import React from 'react';
import { resultToColor } from '../util/display.js'
const Word = ( { currDisplay, result } ) => {
  return (
    <ul>
      {currDisplay.map((letter,i) => {
        return <li key={i}>
                  <span id="letter" style={resultToColor(result)}>{letter}</span>
                  <span id="underscore">_</span>
                </li>
              })
        }
    </ul>
  )
}

export default Word;
