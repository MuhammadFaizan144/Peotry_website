import React, { useEffect } from 'react'
import { useAuth } from '../store/auth'
const AdminUser = () => {
  const {authorizationToken}=useAuth()
  const getAllUserData=async () => {
    try {
      const response=await fetch(`http://localhost:3000/api/admin/user`,{
        method:"GET",
        headers:{
          Authorization:authorizationToken
        }
      })
      const data=await response.json()
      console.log("admin user",data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllUserData()
  },[])
  return (
    <div>
      Admin_User
Admin-User
    </div>
  )
}

export default AdminUser
