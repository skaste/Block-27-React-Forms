import React from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css';
import { useState } from 'react';



const App = () => {
  const [token, setToken] = useState([]);
  return (
    <>
      <h1>Hello World!</h1>
      <SignUpForm  setToken={setToken}/>
      <Authenticate token={token}/>
    </>
  )
}

export default App
