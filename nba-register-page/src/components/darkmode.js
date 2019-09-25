import React from 'react';
import Darkmode from 'darkmode-js';
import '../index.css'
import styled from 'styled-components';


new Darkmode().showWidget();
var options = {
   top: '0px',
   bottom: '54px',
   right: 'unset',
   left: '32px',
   time: '0.5s',
   mixColor: '#fff',
   backgroundColor: '#fff',
   buttonColorDark: '#fff',
   buttonColorLight: '#100f2c',
   saveInCookies: false,
   autoMatchOsTheme: true
 }
 const darkmode = new Darkmode(options);
 darkmode.showWidget();
function DarkMode(){
   return(
       <span></span>
   )
}
export default DarkMode;