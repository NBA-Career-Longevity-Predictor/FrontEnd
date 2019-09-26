import React from "react";
import styled from "styled-components";

let Player = props => {
  return (
    <div>
      <p>Player: {props.player.player}</p>
      <p>All NBA: {props.player.all_nba}</p>
      <p>All Star: {props.player.all_star}</p>
      <p>Draft Year: {props.player.draft_yr}</p>
      <p>Pick: {props.player.pk}</p>
      <p>Team: {props.player.team}</p>
      <p>College: {props.player.college}</p>
      <p>Years Pro: {props.player.yrs}</p>
      <p>Career Games Played: {props.player.games}</p>
      <p>Career Minutes Played: {props.player.minutes_played}</p>
      <p>Career Points Scored: {props.player.pts}</p>
      <p>Total Career Rebounds: {props.player.trb}</p>
      <p>Total Career Assists: {props.player.ast}</p>
      <p>Career Field Goal %: {props.player.fg_percentage}</p>
      <p>Career Three Point %: {props.player.tp_percentage}</p>
      <p>Career Free Throw %: {props.player.ft_percentage}</p>
      <p>Career Minutes Per Game Average: {props.player.minutes_per_game}</p>
      <p>Career Points Per Game Average: {props.player.points_per_game}</p>
      <p>Career Total Rebounds Per Game: {props.player.trb_per_game}</p>
      <p>Career Assists Per Game Average: {props.player.assists_per_game}</p>
      <p>Career Win Share: {props.player.win_share}</p>
      <p>Career Win Share Per Game: {props.player.ws_per_game}</p>
      <p>Box +/-: {props.player.bpm}</p>
      <p>Value Over Replacement Player: {props.player.vorp}</p>
      <p>Did Player Attend College: {props.player.attend_college}</p>
    </div>
  );
};

export default Player;
