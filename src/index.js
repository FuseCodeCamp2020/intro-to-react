import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square (props) {
  return (
    <button className='square'>
      {props.value}
    </button>
  )
}

function Board () {
  const status = 'Next player: X'

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className='board-row'>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className='board-row'>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
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
