import { BUY_ICECREME } from "./iceCremeType"

const initialState = {
    numOfIceCremes: 20
}

export const iceCremeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREME: return{
            ...state,
            numOfIceCremes: state.numOfIceCremes - 1 
        }
        default: return state
    }
    
}
