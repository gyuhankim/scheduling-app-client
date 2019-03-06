import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import scheduleReducer from './reducers/Schedule';

const store = createStore(
    combineReducers({
        form: formReducer,
        schedule: scheduleReducer
    }),
    applyMiddleware(thunk)
);

export default store;