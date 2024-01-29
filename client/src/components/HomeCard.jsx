import React from 'react'
import { GrUpdate} from "react-icons/gr"
import { MdDelete } from "react-icons/md";
import {useDispatch} from "react-redux"
import { deletePostAction } from '../redux/actions/post';
export default function HomeCard({post}) {
    const dispatch = useDispatch()
    const deletePost = (id) =>{
        dispatch(deletePostAction(id))
    }
    const updatePost = (id) =>{
        dispatch({type:"MODAL", payload:{open:true, updateId: id}})


    }
  return (
    <div className='relative w-[250px] border p-3 bg-gray-300 rounded-md flex-wrap'>
      <div className=' font-bold text-xl'>{post?.title}</div>
      <div className=' text-gray-700 text-sm'>{post?.description}</div>

      <div className=' flex items-center justify-between mt-4'>
         <span className='text-xs text-gray-500'>{post?.user}</span>
          <span className='text-xs text-gray-500'>{post?.date}</span>

      </div>
      <div className=' absolute -top-3 -right-3 flex items space-x-3'>
        <MdDelete onClick={()=> deletePost(post._id)} size={22} className=" bg-red-500 rounded-full text-white p-1 cursor-pointer"></MdDelete>
        <GrUpdate onClick={()=> updatePost(post._id)} size={22}  className="bg-red-500 rounded-full text-white p-1 cursor-pointer"></GrUpdate>
      </div>
    </div>
  )
}
