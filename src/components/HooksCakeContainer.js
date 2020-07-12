import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'


export const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Numbers of cake: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>But cake</button>
        </div>
    )
}


