import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <LoginForm/>
        <RegistrationForm/>
      </div>
    )
  }
}
