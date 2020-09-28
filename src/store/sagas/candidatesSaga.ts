import axios from "axios";
import { put, takeEvery, call, delay } from "redux-saga/effects";
import * as actions from "../actions/actions";
import * as actionTypes from "../actions/actionTypes";

function* handleFetch() {
  try {
    yield delay(250);
    const candidates = yield call(
      [axios, axios.get],
      "http://localhost:8888/api/v1/candidates"
    );
    yield put(actions.fetchCandidatesSuccess(candidates.data));
  } catch (error) {
    yield put(actions.fetchCandidatesError(error));
  }
}

function* candidatesSaga() {
  yield takeEvery(actionTypes.FETCH_CANDIDATES_REQUEST, handleFetch);
}
export default candidatesSaga;
