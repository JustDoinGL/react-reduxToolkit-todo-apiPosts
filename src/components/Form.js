import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getText, submitTodo } from '../redux/features/todoSlice'

const Form = () => {
    const dispatch = useDispatch()

    const text = useSelector(({ todo }) => todo.text)

    const getValue = (e) => {
        dispatch(getText(e.target.value))
    }

    const getSubmit = () => {
        dispatch(submitTodo())
    }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                onChange={getValue}
                value={text}
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
            onClick={getSubmit}
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
