import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/reducers";
import { Candidate } from "../../store/reducers/candidatesReducer";
import * as actions from "../../store/actions/actions";

export const PreloadedList: React.FC = () => {
  const { candidatesList } = useSelector(
    (state: AppState) => state.preloadedList
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.preloadListRequest());
  }, [dispatch]);

  return (
    <div className="PreloadedList">
      {candidatesList.length !== 0 ? (
        <div>
          <h1>This is preloaded candidate list:</h1>
          <table className="Table">
            <tbody>
              {candidatesList.map((candidate: Candidate) => {
                return (
                  <tr key={candidate.name}>
                    <td>
                      Name: <b>{candidate.name}</b>
                    </td>
                    <td>
                      Experience: <b>{candidate.experienceYears} years</b>
                    </td>
                    <td>
                      Skills: <b>{candidate.skillsSet.join(" , ")}</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
