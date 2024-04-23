import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaWindowClose } from "react-icons/fa";
import { createPostAction, updatePostAction } from '../redux/actions/post';


export default function Modal() {
    const [postData, setPostData] = useState({user:"", title:"", description:""})
  const dispatch = useDispatch()
  const {modal} = useSelector(state=>state.modal)
  const onChangeHandle = (e) =>{
    setPostData({...postData, [e.target.name]: e.target.value})
  }

  const shareCreate = () =>{
    if(modal?.updateId){
      dispatch(updatePostAction(modal?.updateId, postData))

    }else{
      dispatch(createPostAction(postData))

    }
    dispatch({type:"MODAL", payload:false})
  }
  return (
    <div className=' w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
      <div className=' bg-white w-full md:w-1/3 p-2 rounded-md'>
        <div onClick={()=>dispatch({type:"MODAL", payload:false})} className=' flex justify-center cursor-pointer items-center'>
        <h1 className=' font-bold text-2xl'>{ modal?.updateId ? "Update Post" : "Share Post" } </h1>

            <FaWindowClose size={25}></FaWindowClose>

        </div>
        <div className=' my-4 flex flex-col space-y-3'>
            <input value={postData.user} name='user' onChange={onChangeHandle} className='input' type="text" placeholder='User' />
            <input value={postData.title} name='title' onChange={onChangeHandle} className='input' type="text" placeholder='Title' />
            <input value={postData.description} name='description' onChange={onChangeHandle} className='input' type="text" placeholder='Description' />

        </div>
        <div onClick={shareCreate} className='w-full p-2 text-center bg-indigo-600 cursor-pointer hover:bg-indigo-600'>Share</div>
      </div>
    </div>
  )
}
