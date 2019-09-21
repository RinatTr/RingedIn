import React from 'react';
import { caseToColor } from '../util/display.js';
const WrongGuesses = ( { wrongGuesses } ) => {
  return (
    <ul>
      {wrongGuesses.map((letter,i) => {
        return <li key={i}>
                  <span id="letter">{letter}</span>
                </li>
              })
        }
    </ul>
  )
}

export default WrongGuesses;
