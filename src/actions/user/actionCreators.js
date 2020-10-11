
import {
  LOGIN,
  REGISTRATION,
  PROFILE_CHANGE,
  ADD_STATEMENT,
  APPROVE_STATEMENT,
  CHANGE_STATEMENT,
  REMOVE_STATEMENT
} from './actionTypes';

export const login = user => ({
  type: LOGIN,
  user,
});

export const registration = user => ({
  type: REGISTRATION,
  user,
});

export const changeProfile = user => ({
  type: PROFILE_CHANGE,
  user,
});

export const addStatement = statement => ({
  type: ADD_STATEMENT,
  statement,
});

export const approveStatement = statement => ({
  type: APPROVE_STATEMENT,
  statement,
});

export const changeStatement = statement => ({
  type: CHANGE_STATEMENT,
  statement,
});

export const removeStatement = statement => ({
  type: REMOVE_STATEMENT,
  statement,
});