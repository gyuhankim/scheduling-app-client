import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
// import gifsReducer from './reducers/gifs';

const store = createStore(
    combineReducers({
        form: formReducer
        // gifs: gifsReducer
    }),
    applyMiddleware(thunk)
);

export default store;