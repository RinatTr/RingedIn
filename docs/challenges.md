## Challenges
Make ring width more easily adjustable.
Understand end game logic.
Display word at end of game if lost (add handleEnd in setState of handleSubmit - the result is dependent on the most recent state, hence fired after setState of submit)
Include multiple filters for one new game request: validate that there are words coming back from chosen parameters before new game. at first did not handleChange of slider because it waited for the HTTP request first (async).

## What would I have changed/improve and how?
Testing userInput (win / lose).
Accessibility for visually impaired: implement text to speech / speech to text.
A recursive function to generate ring divs (in case would like to change number of guesses).

## What did I learn from it?
Modular programming.

## What did I de-prioritize ?
Keys events handler.
Consistency of ring borders.

## Assumptions
Player would like to see the correct word after game ended.
