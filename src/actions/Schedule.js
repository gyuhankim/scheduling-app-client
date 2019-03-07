import { API_BASE_URL } from '../config';

export const GET_SCHEDULE_REQUEST = 'GET_SCHEDULE_REQUEST';
export const getScheduleRequest = () => ({
  type: GET_SCHEDULE_REQUEST
})

export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS';
export const getScheduleSuccess = schedule => ({
  type: GET_SCHEDULE_SUCCESS,
  schedule
})

export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR';
export const getScheduleError = err => ({
  type: GET_SCHEDULE_ERROR,
  err
})

export const getSchedule = () => dispatch => {
  dispatch(getScheduleRequest());

  return fetch(`${API_BASE_URL}/schedule`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(schedule => dispatch(getScheduleSuccess(schedule)))
  .catch(err => dispatch(getScheduleError(err)))
}

export const UPDATE_SCHEDULE_REQUEST = 'UPDATE_SCHEDULE_REQUEST';
export const updateScheduleRequest = () => ({
  type: UPDATE_SCHEDULE_REQUEST
})

export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS';
export const updateScheduleSuccess = () => ({
  type: UPDATE_SCHEDULE_SUCCESS
})

export const UPDATE_SCHEDULE_ERROR = 'UPDATE_SCHEDULE_ERROR';
export const updateScheduleError = err => ({
  type: UPDATE_SCHEDULE_ERROR,
  err
})

export const updateSchedule = data => (dispatch, getState) => {
  dispatch(updateScheduleRequest());

  const selected = getState().schedule.selected;

  return fetch(`${API_BASE_URL}/schedule`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      timeID: selected.id,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      available: data.available || false
    })
  })
  .then(() => dispatch(updateScheduleSuccess()))
  .then(() => dispatch(getSchedule()))
  .catch(err => dispatch(updateScheduleError(err)))
}

export const SELECT_TIME_SLOT = 'SELECT_TIME_SLOT';
export const selectTimeSlot = selected => ({
  type: SELECT_TIME_SLOT,
  selected
})

export const MAKE_EDITABLE = 'MAKE_EDITABLE';
export const makeEditable = bool => ({
  type: MAKE_EDITABLE,
  bool
})