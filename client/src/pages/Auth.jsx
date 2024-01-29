import React, { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'

export default function Auth() {
  const [signUp, setSignUp] = useState(true)
  const [authData, setAuthData] = useState({username:"", email:"", password:""})
  const dispatch = useDispatch()

  const onChangeHandle = (e) =>{
    setAuthData({...authData, [e.target.name]: e.target.value})
  }

  const authFunc = () =>{
    if(signUp){
      dispatch(registerAction(authData))
    }else{
      dispatch(loginAction(authData))
    }
  }

  return (
    <div className=' w-full h-screen bg-gray-100 flex items-center justify-center'>
      <div className="w-1/3 bg-white p-3">
        <h1 className='text-2xl text-gray-700 font-bold'>{signUp ? "Register" :"Login"} </h1>
        <div className='flex flex-col space-y-3 my-5'>
            {signUp && <input value={authData.username} name='username' onChange={onChangeHandle} type="text" placeholder='Username' className=' input'/>}
            <input value={authData.email} name='email' onChange={onChangeHandle} type="text"  placeholder='Email' className='input'/>
            <input value={authData.password} name='password' onChange={onChangeHandle} type="text" placeholder='Password' className='input'/>
        </div>
        <div className=' text-red-500 text-xs cursor-pointer mb-4'> {signUp 
        ? 
        <span onClick={()=>setSignUp(!signUp)}>Login</span>  
        : 
        <span onClick={()=>setSignUp(!signUp)}>Register</span>} </div>

        <div onClick={authFunc} className="cursor-pointer w-full p-2 text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-800 ">{signUp ? "Register" :"Login"} </div>
      </div>
    </div>
  )
}
