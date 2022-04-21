import * as types from '../../Types/Types';

const initialState = {
    posts: [],
    loading: false,
}


export const posts = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_POST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case types.GET_POST_FAIL:
            return {
                ...state,
                loading: false,

            }


        default: return state;
    }

}
