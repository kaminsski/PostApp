
import React from 'react'
import { useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';
import useToken from '../hooks/useToken';
export default function Home() {
  const {posts} = useSelector(state => state.posts)
  
  
  const [token] = useToken();
  console.log(token);
  if (token === null) {
    window.location.href = "/auth";
  }
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
