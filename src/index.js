import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square (props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Board () {
  const [squares, setSquares] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const status = `Next player: ${currentPlayer}`

  function handleClick (i) {
    const newSquares = squares.slice()
    newSquares[i] = currentPlayer
    setSquares(newSquares)

    const newCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    setCurrentPlayer(newCurrentPlayer)
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

function Game () {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
