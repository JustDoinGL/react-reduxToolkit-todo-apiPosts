import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getPostsTitile = createAsyncThunk(
    'postsSlice/getPostsTitile',
    async (_, { dispatch, fulfillWithValue }) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(getPosts(response.data))
    }
)

export const deletePostsTitile = createAsyncThunk(
    'postsSlice/deletePostsTitile',
    async (id, { dispatch, fulfillWithValue }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePosts(id))
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsArr: []
    },
    reducers: {
        getPosts: (state, { payload }) => {
            state.postsArr = payload
        },
        deletePosts: (state, { payload }) => {
            state.postsArr = state.postsArr.filter(e => e.id !== payload)
        }
    },
    extraReducers: {
        [getPostsTitile.fulfilled]: () => console.log(),
        [getPostsTitile.pending]: () => console.log(),
        [getPostsTitile.rejected]: () => console.log('Error'),
        [deletePostsTitile.fulfilled]: () => console.log(),
        [deletePostsTitile.pending]: () => console.log(),
        [deletePostsTitile.rejected]: () => console.log('Error'),
    },
})

export const { getPosts, deletePosts } = postsSlice.actions

export default postsSlice.reducer