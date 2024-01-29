import { useEffect, useState } from 'react'

export default function useToken() {
    const [token, setToken] = useState("")
    useEffect(() => {
      setToken(JSON.parse(localStorage.getItem("auth")))
    
      
    }, [])
    
  return [token]
}
