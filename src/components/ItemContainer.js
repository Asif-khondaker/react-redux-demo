import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'
import { buyIceCreme } from '../redux/iceCreme/iceCremeAction'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item: {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.iceCreme.numOfIceCremes

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCreme())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer)
