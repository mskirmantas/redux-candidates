import axios from "axios";
import { put, takeEvery, call, delay } from "redux-saga/effects";
import * as actions from "../actions/actions";
import * as actionTypes from "../actions/actionTypes";

function* handlePreload() {
  try {
    yield delay(500);
    const preloadedList = yield call(
      [axios, axios.get],
      "http://localhost:8888/api/v1/candidates"
    );

    yield put(actions.preloadListSuccess(preloadedList.data));
  } catch (error) {
    yield put(actions.preloadListError(error));
  }
}

function* preloadSaga() {
  yield takeEvery(actionTypes.PRELOAD_LIST_REQUEST, handlePreload);
}
export default preloadSaga;
