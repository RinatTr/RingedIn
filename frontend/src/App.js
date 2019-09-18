import React from 'react';
import './App.css';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RingedIn</h1>
        <h4>Guess the next letter in the word and keep your rings colorful!</h4>
      </header>
      <Main />
    </div>
  );
}

export default App;
