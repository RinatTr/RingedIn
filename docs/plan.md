# Plan

## MVP Features
- At the start of the game the computer/secret-keeper will choose a dictionary word
- The guesser loses the game if they guess 6 letters that are not in the secret word
- The guesser wins the game if they guess all letters in the secret word correctly and have
not already lost the game per the conditions above
- The length of the secret word is displayed to the guesser (e.g. as a set of underscores)
- As the guesser makes correct guesses, occurrences of the guessed letter in the word are shown while unknown letters are still hidden
- The number of guesses remaining is displayed
- A list of incorrect guesses are displayed
- retrieve a dictionary list of words from the word dictionary REST API

## Extensions
- 6 colored rings interface indicates wrong guesses left. one colored ring greys out each wrong guess.
- a sound comprised of 6 notes played one by one to indicate wrong guesses left. one note less will be played each time.
- implement filter by difficulty
- implement filter by max or min word length
- implement keyboard event listener (instead of text input)

## TODO
Timeframe: 09/16 - 09/23

#### Day 1 (Mon)
1. Wireframe

#### Day 2 + 3 (Tue, Wed)
2. MVP Game logic
  - GET all words from API and store in state
  - handle user input
  - validate input
  - update state logic
    - example initial state
  - basic display of game

#### Day 3 (Wed)
4. Colored rings display component + design

#### Day 4 (Thur)
5. Play sound module component (optional)

#### Day 5 (Fri)
6. Filter by difficulty, max and min length (optional)
7. keyboard event listener (optional)

#### Day 6 (Sat)
8. Refine design, make responsive

#### Day 7 (Sun)
9. Final touches

#### Day 8 (Mon)
Submit
