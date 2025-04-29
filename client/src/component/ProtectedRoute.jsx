import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';

const ProtectedRoute = ({children}) => {
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate()
    useEffect(async ()=>{
      if(!user){
        navigate('/login')
      }
    },[user,navigate])
  return (
    <>{children}</>
  )
}

export default ProtectedRoute