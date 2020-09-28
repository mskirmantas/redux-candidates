import { combineReducers } from "redux";

import { CandidatesState, candidatesReducer } from "./candidatesReducer";
import { PreloadState, preloadReducer } from "./preloadReducer";

export interface AppState {
  candidates: CandidatesState;
  preloadedList: PreloadState;
}
const rootReducer = combineReducers({
  candidates: candidatesReducer,
  preloadedList: preloadReducer,
});

export default rootReducer;
