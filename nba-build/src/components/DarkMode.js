import React from "react";

import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

var options = {
    top: '0px',
    bottom: '148px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#fff',  // default: '#100f2c'
    buttonColorLight: '#100f2c', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();


function DarkMode(){
    return(
        <span></span>
    )
}

export default DarkMode;