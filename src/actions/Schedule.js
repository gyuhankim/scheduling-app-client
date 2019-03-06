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

}

export const UPDATE_SCHEDULE_REQUEST = 'UPDATE_SCHEDULE_REQUEST';
export const updateScheduleRequest = () => ({
  type: UPDATE_SCHEDULE_REQUEST
})

export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS';
export const updateScheduleSuccess = schedule => ({
  type: UPDATE_SCHEDULE_SUCCESS,
  schedule
})

export const UPDATE_SCHEDULE_ERROR = 'UPDATE_SCHEDULE_ERROR';
export const updateScheduleError = err => ({
  type: UPDATE_SCHEDULE_ERROR,
  err
})

export const updateSchedule = data => dispatch => {

}