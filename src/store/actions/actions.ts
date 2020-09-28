import * as actionTypes from "./actionTypes";
import { Candidate } from "../reducers/candidatesReducer";

export const fetchCandidatesRequest = () => {
  return {
    type: actionTypes.FETCH_CANDIDATES_REQUEST,
  };
};

export const fetchCandidatesSuccess = (candidates: Candidate[]) => {
  return {
    type: actionTypes.FETCH_CANDIDATES_SUCCESS,
    payload: candidates,
  };
};

export const fetchCandidatesError = (error: Error) => {
  return {
    type: actionTypes.FETCH_CANDIDATES_ERROR,
    payload: error,
  };
};

export const preloadListRequest = () => {
  return {
    type: actionTypes.PRELOAD_LIST_REQUEST,
  };
};

export const preloadListSuccess = (preloadedList: Candidate[]) => {
  return {
    type: actionTypes.PRELOAD_LIST_SUCCESS,
    payload: preloadedList,
  };
};

export const preloadListError = (error: Error) => {
  return {
    type: actionTypes.PRELOAD_LIST_ERROR,
    payload: error,
  };
};
