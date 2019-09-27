import React, {useState, useEffect} from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Estimate from "./Estimate";
import styled from "styled-components";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// const Prediction = props => {

// }

// axiosWithAuth.post("dataScienceUrl", playerInfo)
// .then(res => {
//     this.setState({ this.prediction : res.data })
// })
// .catch(err => console.log(err));
let prediction = [];

let Player = props => {
    const [state, setState] = useState({
      all_nba: "",
      all_star: "",
      draft_yr: "",
      pk: "",
      fg_percentage: "",
      tp_percentage: "",
      ft_percentage: "",
      minutes_per_game: "",
      points_per_game: "",
      trb_per_game: "",
      assists_per_game: "",
      ws_per_game: "",
      bpm: "",
      vorp: "",
      attend_college: "" 
        // list: []
      });

      useEffect(() => {
        setState({ ...state,     
          all_nba: props.props.all_nba,
          all_star: props.props.all_star,
          draft_yr: props.props.draft_yr,
          pk: props.props.pk,
          fg_percentage: props.props.fg_percentage,
          tp_percentage: props.props.tp_percentage,
          ft_percentage: props.props.ft_percentage,
          minutes_per_game: props.props.minutes_per_game,
          points_per_game: props.props.points_per_game,
          trb_per_game: props.props.trb_per_game,
          assists_per_game: props.props.assits_per_game,
          ws_per_game: props.props.ws_per_game,
          bpm: props.props.bpm,
          vorp: props.props.vorp,
          attend_college: props.props.attend_college })

      }, [])

    return (
      <Div>
        <P>Player: {props.props.player}</P>
        <P2>All NBA: {props.props.all_nba}</P2>
        <P2>All Star: {props.props.all_star}</P2>
        <P2>Draft Year: {props.props.draft_yr}</P2>
        <P2>Pick: {props.props.pk}</P2>
        <P2>Team: {props.props.team}</P2>
        <P2>College: {props.props.college}</P2>
        <P2>Years Pro: {props.props.yrs}</P2>
        <P2>Career Games Played: {props.props.games}</P2>
        <P2>Career Minutes Played: {props.props.minutes_played}</P2>
        <P2>Career Points Scored: {props.props.pts}</P2>
        <P2>Total Career Rebounds: {props.props.trb}</P2>
        <P2>Total Career Assists: {props.props.ast}</P2>
        <P2>Career Field Goal %: {props.props.fg_percentage}</P2>
        <P2>Career Three Point %: {props.props.tp_percentage}</P2>
        <P2>Career Free Throw %: {props.props.ft_percentage}</P2>
        <P2>
          Career Minutes Per Game Average:{" "}
          {props.props.minutes_per_game}
        </P2>
        <P2>
          Career Points Per Game Average:{" "}
          {props.props.points_per_game}
        </P2>
        <P2>
          Career Total Rebounds Per Game: {props.props.trb_per_game}
        </P2>
        <P2>
          Career Assists Per Game Average:{" "}
          {props.props.assits_per_game}
        </P2>
        <P2>Career Win Share: {props.props.win_share}</P2>
        <P2>Career Win Share Per Game: {props.props.ws_per_game}</P2>
        <P2>Box +/-: {props.props.bpm}</P2>
        <P2>Value Over Replacement Player: {props.props.vorp}</P2>
        <P2>
          Did Player Attend College: {props.props.attend_college}
        </P2>
        <Estimate props={state}/>
      </Div>
    )
}

export default Player;

const P = styled.p`
  margin-top: 10px;
  font-size: 1.75rem;
  padding: 5px;
`;

const P2 = styled.p`
  font-size: 1.5rem;
  padding: 7px;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 30%;
  opacity: 0.7;
  margin-top: 7px;
  font-size: 1.5rem;
`;