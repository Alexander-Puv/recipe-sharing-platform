'use client'

import React, { useState } from 'react'
import Button from './UI/Button'

interface AuthFormProps {
  signup?: boolean
}

const AuthForm = ({signup}: AuthFormProps) => {
  const [checked, setChecked] = useState(false);

  const handleDivClick = () => {
    setChecked(!checked);
  };

  return (
    <div className='authForm'>
      <h3>{signup ? 'SIGN UP' : 'LOG IN'}</h3>
      <div className="authForm__inputs">
        {signup && <input type="text" placeholder='Name' />}
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
      </div>

      <div onClick={handleDivClick} className="authForm__help">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p className="sm">Remember Me?</p>
      </div>

      <Button text='LOGIN' />

      <div className="authForm__or">
        <div className="authForm__line" />
        <p className="sm font-medium">or</p>
        <div className="authForm__line" />
      </div>

      <p className='self-center'>{signup ? 'Login' : 'Sign up'}</p>
    </div>
  )
}

export default AuthForm