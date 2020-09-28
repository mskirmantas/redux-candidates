import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { AppState } from "../../store/reducers";
import { Candidate } from "../../store/reducers/candidatesReducer";
import * as actions from "../../store/actions/actions";
import { PreloadedList } from "../PreloadedList/PreloadedList";

export const MainPage: React.FC = () => {
  const { candidates } = useSelector((state: AppState) => state.candidates);
  const dispatch = useDispatch();

  const getCandidates = () => dispatch(actions.fetchCandidatesRequest());

  return (
    <div className="MainPage">
      <PreloadedList />
      <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => getCandidates()}
      >
        Get candidates
      </Button>

      <br />
      <table className="Table">
        <tbody>
          {candidates.map((candidate: Candidate) => {
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
  );
};
