import React from 'react'
import { useState } from 'react'



const SignUpForm = () => {
const[username , setUserName]=useState("");
const[password , setPassword]=useState("");
const[error , setError]=useState(null);
  return (
    <>
      <h2>Sign Up!</h2>
      <form>
        <label>
          Username: <input></input>
        </label>
        <label>
          Password: <input></input>
        </label>
        <button>Submit!</button>
      </form>
    </>
  )
}

export default SignUpForm