import { Reducer } from "redux";
import * as actionTypes from "../actions/actionTypes";

export interface CandidatesState {
  isLoading: boolean;
  candidates: Candidate[];
  error?: Error;
}

export interface Candidate {
  name: string;
  experienceYears: number;
  skillsSet: string[];
}

export const initialState: CandidatesState = {
  isLoading: false,
  candidates: [],
  error: undefined,
};

export const candidatesReducer: Reducer<CandidatesState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_CANDIDATES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actionTypes.FETCH_CANDIDATES_SUCCESS: {
      return {
        isLoading: false,
        candidates: action.payload,
        error: undefined,
      };
    }
    case actionTypes.FETCH_CANDIDATES_ERROR: {
      return {
        isLoading: false,
        candidates: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
