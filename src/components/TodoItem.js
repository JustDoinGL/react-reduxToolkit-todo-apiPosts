import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/features/todoSlice'

const TodoItem = ({item}) => {

    const dispatch = useDispatch()

    const completePost = () => {
        dispatch(completeTodo(item.id))
    }

    const deletePost = () => {
        dispatch(deleteTodo(item.id))
    }

    return (
        <div className='flex justify-between items-center my-2'>
            <div
             onClick={completePost}            
            className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${item.complete ? 'line-through font-medium text-lime-400' : ''}`}>
               {item.text}
            </div>
            <div
            onClick={deletePost}
             className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
