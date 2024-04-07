
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';
import { getPostsAction } from '../redux/actions/post';
export default function Home() {
  const {posts} = useSelector(state => state.posts)
  
  
  
  return (
    <div className=' flex items-center m-5 flex-wrap gap-10 justify-center'>
      {
        posts && posts.map((post, i) => (
          <HomeCard key={i} post={post}></HomeCard>
        ))
      }
    </div>
  )
}
