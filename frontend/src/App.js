import React from 'react';
import './css/App.css';
import Main from './components/Main.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RingedIn</h1>
        <p>Guess the next letter in the word and keep your rings colorful!</p>
      </header>
      <section className="App-main">
        <Main />
      </section>
    </div>
  );
}

export default App;
