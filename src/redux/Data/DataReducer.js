import {ADD_DATA} from './types'

const initialState = {
data: null,
}

const DataReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export default DataReducer