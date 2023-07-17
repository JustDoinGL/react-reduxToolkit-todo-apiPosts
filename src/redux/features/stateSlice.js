import { createSlice } from "@reduxjs/toolkit"

const stateSlice = createSlice({
    name: "state",
    initialState: {
        name: '',
        lastName: '',       
    },
    reducers: {
        getName: (state, { payload }) => {
            state.name = payload
        },
        getLastName: (state, { payload }) => {
            state.lastName = payload
        },
    }
})

export const {getName, getLastName} = stateSlice.actions

export default stateSlice.reducer