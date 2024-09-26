import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo , editTodo, removeTodo } from './config/redux/reducers/todoSlice';

const App = () => {

  const todoVal = useRef();

  // Dispatch
     
  const dispatch = useDispatch()
  

  // selector
  const selecter = useSelector(state => state.todos.todo)
  console.log(selecter);

  const addTodoInRedux = (event) =>{
    event.preventDefault()
    console.log("todo added" , todoVal.current.value);
    dispatch(addTodo({
      title: todoVal.current.value
    }))
}

const deleteItemFromRedux = (index) =>{
  console.log("delete item" , index);

  dispatch(removeTodo({
    index
  }))
  
  
 }



const editItemFromIndex = (index) =>{


  dispatch(editTodo({
    index
  }))
  
  
}









  return (
    <>
    <form >
      <input type="text" ref={todoVal} placeholder='Enter a text'/>
      <button onClick={addTodoInRedux}>add Todo</button>
    </form>




    <ul>
      {selecter.length > 0 ? selecter.map((item , index)=>{
        return <li key={item.id}>{item.title}
        <button onClick={ () =>deleteItemFromRedux(index)}>delete</button>
        <button onClick={ () =>editItemFromIndex(index)}>edit</button>
        </li>
       
      }): <h1>No Data Found</h1>}
    </ul>
    </>
  )
}

export default App



















