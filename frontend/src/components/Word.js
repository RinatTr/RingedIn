import React from 'react';
const Word = ( { currDisplay } ) => {
  return (
    <ul>
      {currDisplay.map((letter,i) => {
        return <li key={i}>
                  <span id="letter">{letter}</span>
                  <span id="underscore">_</span>
                </li>
              })
        }
    </ul>
  )
}

export default Word;
