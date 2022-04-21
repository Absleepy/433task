import { createStore } from 'redux'
import rootReducer from '../Reducers/RootReducer/RootReducer';

const store = createStore(rootReducer)

export default store