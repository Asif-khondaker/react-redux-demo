import React from 'react'
import { connect } from 'react-redux'
import { buyIceCreme } from '../redux/iceCreme/iceCremeAction'

const IceCremeContainer = (props) => {
    return (
        <div>
            <h2>Number of IceCreme:{props.numOfIceCremes}</h2>
            <button onClick={props.buyIceCreme}>Buy IceCreme</button>
        </div>
    )
}

// function IceCremeContainer(props){
//     return (
//                  <div>
//                      <h2>Number of IceCreme:{props.numOfIceCreme}</h2>
//                      <button onClick={props.buyIceCreme}>Buy IceCreme</button>
//                 </div>
//             )
// }

const mapStateToProps = state => {
    return {
      numOfIceCremes: state.iceCreme.numOfIceCremes
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCreme: () => dispatch(buyIceCreme())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCremeContainer)
