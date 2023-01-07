import React, { Component } from 'react'
import './TodoSearch.css'
class TodoSearch extends Component {
  state={
    term: ''
  }
  onSearchChange = (e) =>{
    const term  = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)


  }

  render(){
    return (
      <div className='search'>
        <input 
        type="text" 
        placeholder='Enter todo'
        className='input-input'
        value={this.state.term}
        onChange = {this.onSearchChange}
         />
         <div>
         <button>All</button>
         <button>Active</button>
         <button>Done</button>
         </div>
      </div>
    )
  }
}

export default TodoSearch