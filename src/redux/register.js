import * as ActionTypes from './ActionTypes';


export const Register = (state = {
        isLoading: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return {...state,
                isLoading: true,
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: ''
            };
        case ActionTypes.REGISTER_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}