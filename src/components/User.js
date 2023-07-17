import React from 'react'
import FirstName from './FirstName'
import LastName from './LastName'
import { useDispatch, useSelector } from 'react-redux'
import { getLastName, getName } from '../redux/features/stateSlice'

const User = () => {

    const dispatch = useDispatch()

    const getNameText = (text) => {
        dispatch(getName(text.target.value))
    }

    const getLastNameText = (text) => {
        dispatch(getLastName(text.target.value))
    }

    const name = useSelector(({ state }) => state.name)

    const lastName = useSelector(({ state }) => state.lastName)

    return (
        <div className='flex flex-col'>
            <input
                onChange={getNameText}
                value={name}
                type='text'
                placeholder='First Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <input
                onChange={getLastNameText}
                value={lastName}
                type='text'
                placeholder='Second Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <div className='flex gap-20 py-5'>
                <div className='flex flex-col'>
                    <div className='flex font-light'>First Name:</div>
                    <div className='flex'>
                        <FirstName />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex font-light'>Last Name:</div>
                    <div className='flex'>
                        <LastName />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
