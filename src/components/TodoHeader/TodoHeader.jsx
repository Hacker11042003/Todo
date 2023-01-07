import React from 'react'
import './TodoHeader.css'

const TodoHeader = ({doneCount, allCount}) => {
  return (
    <div className='d-flex title'>
      <h1>Todo List</h1>
      <h2>{allCount} more to do, done {doneCount}</h2>
    </div>
  )
}

export default TodoHeader