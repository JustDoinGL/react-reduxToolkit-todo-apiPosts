import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPostsTitile } from '../redux/features/postsSlice'

import PostItem from './PostItem'

const Posts = () => {

    const dispatch = useDispatch()

    const getPosts = () => {
        dispatch(getPostsTitile())
    }

    const data = useSelector(({ posts }) => posts.postsArr)

    return (
        <div>
            <button
                onClick={getPosts}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {data?.map((e) => (
                <PostItem key={e.id} post={e}/>
            ))}
        </div>
    )
}

export default Posts
