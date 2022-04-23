import * as types from '../../Types/Types'


export const getPostsAction = (data) => ({
    type: types.GET_POST_SUCCESS,
    payload: data
})
export const loadingAction = () => ({
    type: types.GET_POST_REQUEST,

})