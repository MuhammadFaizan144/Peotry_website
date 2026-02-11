import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import {Link} from 'react-router-dom'
const AdminUser = () => {
  const [user, setUser] = useState([])
  const { authorizationToken } = useAuth()
  const getAllUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      console.log(`data ${data}`)
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser=async(id)=>{
    try {
      const response=await fetch(`http://localhost:3000/api/admin/user/delete/${id}`,{
        method:'DELETE',
        headers:{
          Authorization:authorizationToken
        }
      })
      const data=await response.json()
      console.log(data) 
      if(response.ok){
        getAllUserData()
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    getAllUserData()
  }, [])
  return (
    <>
  <section className="min-h-screen bg-gray-100 px-4 md:px-10 py-10">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Admin User Data
      </h1>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          
          {/* Table Head */}
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Phone</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Update</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {user.map((curUser, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">
                  {curUser.username}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {curUser.email}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {curUser.phone}
                </td>

                {/* Edit Button */}
                <td className="px-6 py-4 text-center">
                  <Link to={`/admin/user/${curUser._id}/edit`} className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
                    Edit
                  </Link>
                </td>

                {/* Delete Button */}
                <td className="px-6 py-4 text-center">
                  <button onClick={()=>deleteUser(curUser._id)} className="bg-red-600 text-white px-4 py-1 rounded-md text-sm hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  </section>
</>
  )
}

export default AdminUser
