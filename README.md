# Intro to React

In this course we will teach you how to build an interactive web-game (tic-tac-toe) from the ground up in React.  Anyone who is starting to explore Javascript libraries to achieve this will benefit from what is taught here.

# Prerequisites

- A Modern Web Browser
  - [Chrome](https://www.google.com/chrome/)
  - [Firefox](https://www.mozilla.org/en-US/firefox/)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install [NodeJS](https://nodejs.org/en/)
3. Install [git](https://git-scm.com/downloads)
4. Clone [this repository](https://github.com/FuseCodeCamp2020/intro-to-react): `git clone https://github.com/FuseCodeCamp2020/intro-to-react`
5. For extra-credit, run `npm install` in the `intro-to-react` folder before you come to CodeCamp. This will help speed up the process.

## Between stages, if you've changed any of the files, which you will have, run `git reset HEAD --hard`

# Stage 1 - It's Alive!!!! (and Configurable)

- `git checkout stage-1`
- `npm start`
  - It should display some output in the console, and then open your browser to http://localhost:3000
- If you see what looks like a tic-tac-toe board in your browser, Great Job!
- Try opening' `src/index.js`, and playing around with the code.
  - It's just HTML, so see what you can make it do.
  - The styles are in `src/index.css`
- See if you can change the colors of the squares in the grid, or the background color of the entire app.
- Use your imagination, make it your own!
- Now, add a prop to the `<Square>` component
  - Call it `value`
  - Props work just like HTML attributes, but better
- Make the `<Square>` component display the prop you're passing to it now!

# Stage 2 - Making the `<Square>` Do A Thing

- `git checkout stage-2`
- You should see a grid of squares with the numbers from `1` to `9`.
- Now lets make it tell you you clicked on it.
  - There is a property that all buttons have called `onClick`
  - You can pass a function to it
  - When you click the button, it'll run the function
- Try adding an `onClick` handler to the `<Square>` component.
  - In your function, try calling a function called `alert`
- Now lets make the `<Square>` count how many times you've clicked it
- Add the following line of code to the `Square` function
```js
const [value, setValue] = useState(0)
```
- See if you can figure out how to make the `onClick` function change the value, and have the button display it

# Stage 3 - Lets Play Tic-Tac-Toe Already!

- `git checkout stage-3`
- You should see a grid of 9 `0`s that count up as you click on them
- Now lets make the board keep track of which square is owned by which player
  - Like you did for the `<Square>` state, add some state to `<Board>`, and initialize it to an empty array
- Write a new function to wrap the update logic
  - use [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to copy the array of squares so we can modify it
  - pass in the index you want to update, and change that index in the new array to an 'X'
  - use the setter function from your state to use the new array as state
- Pass in both the square's value, and a function it can call when it's clicked
  - for the `value` prop, use `squares[<the index of the square>]`
  - for the `onClick` prop, use `() => handleClick(<the index of the square>)`
- Now in `<Square>` use the props
  - Set the `onClick` property on the `<button>` element to the `onClick` property you passed in
  - Put the `value` property you passed in where the `<button>` will draw it
  - You can get rid of the `<Square>`s state, too
- But we can't take turns!!!!
  - If you play with it right now, you'll see that you can click on the squares, and 'X' will be put in each one you click.
- That's not how tic-tac-toe works!!!!
  - We need to be able to change which player's turn it is.
  - We need MOAR STATE
- Add another state to track `currentPlayer` and initialize it to 'X'
- Add code to your `handleClick` function to update `currentPlayer` to 'X' if it's currently 'O' and 'O' if it's currently X

# Stage 4 - I Can't Win! And Other Bugs!
- `git checkout stage-4`
- You should now be able to "play" tic-tac-toe.
  - Sure, you can overwrite the other player's moves
  - And sure, nobody can win, and it just continues forever
  - But hey! At least it's tic-tac-toe
- Paste this function into index.js at the bottom
```js
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}
```
- Now call this function at the beginning of the `Board` function (after the `squares` state function).
- This returns the `winner` if there is one, so you can update the `status` text to reflect if there's a winner.
- You can also call this function in the `handleClick` function, and `return` if there's a winner
- Can you figure out how to also return if the square that was clicked already has a value?
  - Any value except for `0, empty string, null, and undefined` are `true`thy in Javascript


# Great Job. Tic-Tac-Toe!!!!
