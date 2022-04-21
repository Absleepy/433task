import { combineReducers } from 'redux'
import { posts } from '../PostsReducer/Posts.reducer';

const rootReducer = combineReducers({
    posts: posts
})

export default rootReducer