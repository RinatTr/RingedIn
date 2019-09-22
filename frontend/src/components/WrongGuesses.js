import React from 'react';
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
