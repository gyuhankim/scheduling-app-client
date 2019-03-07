import {
  SHOW_MODAL,
  HIDE_MODAL
} from '../actions/Modal';

const initialState = {
  isShowing: false,
  id: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
    return {
      ...state,
      isShowing: true,
      id: action.id
    }

    case HIDE_MODAL:
    return {
      ...state,
      isShowing: false,
      id: null
    }

    default:
    return state;
  }
}