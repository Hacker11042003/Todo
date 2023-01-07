import React from 'react'
import './TodoList.css'

const TodoListItem = (props) => {
  const {id, title, completed,importand} = props
  let classNames = ''
  if(completed){
    classNames+= ' done'
    
  }
  if(importand){
    classNames+= ' importand'
  }

  return (
    <div className='item'>
      <div>
        <span
        className={classNames}
        onClick={()=> props.onCompleted(id)}>{title}</span>
      </div>
      <div>
        <button onClick={()=>{
          props.onDelete(id)
        }} className='btn1'><i class="bi bi-trash3"></i></button>
        <button onClick={()=>{
          props.onImportand(id)
        }} className='btn2'><i class="bi bi-exclamation-octagon"></i></button>
      </div>
      </div>
  )
}

export default TodoListItem
