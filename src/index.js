import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square (props) {
  const [value, setValue] = useState(0)

  return (
    <button className='square' onClick={() => setValue(value + 1)}>
      {value}
    </button>
  )
}

function Board () {
  const status = 'Next player: X'

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
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
