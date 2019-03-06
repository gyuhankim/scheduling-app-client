import {
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_ERROR,
  UPDATE_SCHEDULE_REQUEST,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_ERROR
} from '../actions/Schedule';

const initialState = {
  timeslots: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_SCHEDULE_REQUEST:
    return {
      ...state,
      loading: true
    }

    case GET_SCHEDULE_SUCCESS:
    return {
      ...state,
      timeslots: action.schedule,
      loading: false,
      error: null
    }

    case GET_SCHEDULE_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case UPDATE_SCHEDULE_REQUEST:
    return {
      ...state,
      loading: true
    }

    case UPDATE_SCHEDULE_SUCCESS:
    return {
      ...state,
      timeslots: action.schedule,
      loading: false,
      error: null
    }

    case UPDATE_SCHEDULE_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    default:
    return state;

  }
}