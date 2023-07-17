import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        text: '',
        todoArr: [],
        id: 0,
    },
    reducers: {
        getText: (state, { payload }) => {
            state.text = payload
        },
        submitTodo: (state) => {
            let todo = {
                id: state.id,
                text: state.text,
                complete: false,
            }

            state.todoArr.push(todo)
            state.id++
            state.text = ""
        },
        completeTodo: (state, { payload }) => {
            const complete = state.todoArr.find(e => e.id === payload)
            complete.complete = !complete.complete
        },
        deleteTodo: (state, { payload }) => {
            state.todoArr = state.todoArr.filter(e => e.id !== payload)
        }
    }
})

export const { getText, submitTodo, completeTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer