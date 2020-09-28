import { callApi } from "../utils/callApi";

export const getData = () => {
  callApi("get", "http://localhost:8888", "/v1/candidates");
};
