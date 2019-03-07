import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import scheduleReducer from './reducers/Schedule';
import modalReducer from './reducers/Modal';

const store = createStore(
    combineReducers({
        form: formReducer,
        schedule: scheduleReducer,
        modal: modalReducer
    }),
    applyMiddleware(thunk)
);

export default store;