import { Reducer } from "redux";
import * as actionTypes from "../actions/actionTypes";
import { Candidate } from "./candidatesReducer";

export interface PreloadState {
  isLoading: boolean;
  candidatesList: Candidate[];
  error?: Error;
}

export const initialState: PreloadState = {
  isLoading: false,
  candidatesList: [],
  error: undefined,
};

export const preloadReducer: Reducer<PreloadState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.PRELOAD_LIST_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.PRELOAD_LIST_SUCCESS: {
      return {
        isLoading: false,
        candidatesList: action.payload,
        error: undefined,
      };
    }
    case actionTypes.PRELOAD_LIST_ERROR: {
      return {
        isLoading: false,
        candidatesList: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
