import {
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_ERROR,
  UPDATE_SCHEDULE_REQUEST,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_ERROR,
  SELECT_TIME_SLOT,
  MAKE_EDITABLE
} from '../actions/Schedule';

const initialState = {
  timeslots: [],
  selected: {},
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
      loading: false,
      error: null
    }

    case UPDATE_SCHEDULE_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case SELECT_TIME_SLOT:
    return {
      ...state,
      selected: action.selected
    }

    case MAKE_EDITABLE:
    return {
      ...state,
      selected: {...state.selected, editable: action.bool}
    }

    default:
    return state;

  }
}