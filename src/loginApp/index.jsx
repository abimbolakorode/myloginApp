import React from 'react'
import './loginApp.css'

const LoginApp = () => {
  return (
    <div className='login_container'>
       <h1 className='login-title'>Login</h1>
      <form>
        <div>
          <label for="Email">Enter Your Email: <input id="Email" name="Email" type="email" required /></label>
        </div>
      </form>
        </div>
  )
}

export default LoginApp;