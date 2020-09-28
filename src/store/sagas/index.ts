import { all, fork } from "redux-saga/effects";
import candidatesSaga from "./candidatesSaga";
import preloadSaga from "./preloadSaga";

function* rootSaga() {
  yield all([fork(candidatesSaga), fork(preloadSaga)]);
}

export default rootSaga;
