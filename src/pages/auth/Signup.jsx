import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const Signup = () => {
    const {signup} = useAuth();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const onChange = (e)=> {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    const onSubmit = (e)=> {
        e.preventDefault();
        signup(userData.email, userData.password)
    }


  return (
    <div className='h-screen flex items-center justify-center'>
        <form action="" onSubmit={onSubmit}>
            <input onChange={(e)=> onChange(e)} name='email' type="email" placeholder="Email" className="input" />
            <input onChange={(e)=> onChange(e)} name='password' type="password" placeholder="Password" className="input" />
            <button type='submit' className='btn btn-active'>Submit</button>
        </form>
    </div>
  )
}

export default Signup