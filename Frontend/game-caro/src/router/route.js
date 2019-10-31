import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../component/Home';
import SignIn from '../component/SignIn';
import MenuGame from '../component/MenuGame';
export default () => {
  return (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component = {Home}/>
        <Route path="/login" component = {SignIn}/>
        <Route path="/game-menu" component = {MenuGame}/>
    </div>
  )
}
