import { createSlice, nanoid } from "@reduxjs/toolkit";




export const todoslice = createSlice({
    name: "Todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state , action) =>{
            // state ka matlab anitial state
            // action k matlab user is ma data bhegy ga
            state.todo.push({
                title: action.payload.title , 
                id: nanoid()
            })

        },
        removeTodo: (state , action)=>{
        state.todo.splice(action.payload.index , 1)
        },
        editTodo: (state , action) => {

            const editedValue = prompt('Enter Edited Value');

            // console.log(editedValue , action.payload.index);
            

state.todo.splice(action.payload.index , 1 , {...state.todo , title: editedValue})

        }



    }
})





export const { addTodo , removeTodo , editTodo } = todoslice.actions
export default todoslice.reducer