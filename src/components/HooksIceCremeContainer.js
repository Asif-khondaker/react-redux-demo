import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCreme } from '../redux/iceCreme/iceCremeAction'

export const HooksIceCremeContainer = () => {
    const numOfIceCremes = useSelector(state => state.iceCreme.numOfIceCremes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecrme:{numOfIceCremes} </h2>
            <button onClick={() => dispatch(buyIceCreme())}>Buy Icecreme</button>
        </div>
    )
}
