import React from 'react';
const Word = ( { currDisplay } ) => {
  return (
    <ul>
      {currDisplay.map((letter,i) => {
        return <li key={i}> {letter} <span>_</span> </li>
      })}
    </ul>
  )
}

export default Word;
