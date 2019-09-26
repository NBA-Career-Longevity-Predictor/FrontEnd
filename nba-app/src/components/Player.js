import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// const Prediction = props => {

// }

// axiosWithAuth.post("dataScienceUrl", playerInfo)
// .then(res => {
//     this.setState({ this.prediction : res.data })
// })
// .catch(err => console.log(err));

let Player = props => {
  console.log(props)
  return (
    <div>
      <p>Player: {props.props.player}</p>
      <p>All NBA: {props.props.all_nba}</p>
      <p>All Star: {props.props.all_star}</p>
      <p>Draft Year: {props.props.draft_yr}</p>
      <p>Pick: {props.props.pk}</p>
      <p>Team: {props.props.team}</p>
      <p>College: {props.props.college}</p>
      <p>Years Pro: {props.props.yrs}</p>
      <p>Career Games Played: {props.props.games}</p>
      <p>Career Minutes Played: {props.props.minutes_played}</p>
      <p>Career Points Scored: {props.props.pts}</p>
      <p>Total Career Rebounds: {props.props.trb}</p>
      <p>Total Career Assists: {props.props.ast}</p>
      <p>Career Field Goal %: {props.props.fg_percentage}</p>
      <p>Career Three Point %: {props.props.tp_percentage}</p>
      <p>Career Free Throw %: {props.props.ft_percentage}</p>
      <p>Career Minutes Per Game Average: {props.props.minutes_per_game}</p>
      <p>Career Points Per Game Average: {props.props.points_per_game}</p>
      <p>Career Total Rebounds Per Game: {props.props.trb_per_game}</p>
      <p>Career Assists Per Game Average: {props.props.assists_per_game}</p>
      <p>Career Win Share: {props.props.win_share}</p>
      <p>Career Win Share Per Game: {props.props.ws_per_game}</p>
      <p>Box +/-: {props.props.bpm}</p>
      <p>Value Over Replacement Player: {props.props.vorp}</p>
      <p>Did Player Attend College: {props.props.attend_college}</p>
    </div>
  );
};

export default Player;
