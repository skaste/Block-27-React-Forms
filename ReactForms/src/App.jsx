import React from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css';



const App = () => {
  // const [token, setToken] = useState(null);
  return (
    <>
      <h1>Hello World!</h1>
      <SignUpForm /*token={token} setToken={setToken}*//>
      <Authenticate /*token={token} setToken={setToken}*//>
    </>
  )
}

export default App
