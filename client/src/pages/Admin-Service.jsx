import React from 'react'
import { useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const AdminService = () => {
  const {authorizationToken,API}=useAuth()

  const[services,setServices]=useState([])

  const getAllServicesData=async () => {
    try {
      const response=await fetch(`${API}/api/admin/service`,{
        method:"GET",
        headers:{
          Authorization:authorizationToken
        }
      })
      const data=await response.json()
      console.log(data)
      if(response.ok){
        setServices(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
 
  const deleteServices=async (id) => {
    try{
      const response=await fetch(`${API}/api/admin/service/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken
        }
      })
      const data=await response.json()
      console.log(data)
      if(response.ok){
        getAllServicesData()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  getAllServicesData()
  }, [])
  return (
     <>
  <section className="min-h-screen bg-gray-100 px-4 md:px-10 py-10">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Admin Services Data
      </h1>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          
          {/* Table Head */}
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Message</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Update</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {services.map((curUser, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">
                  {curUser.type}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {curUser.writer}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {curUser.content}
                </td>

                {/* Edit Button */}
                <td className="px-6 py-4 text-center">
                  <Link to={`/admin/service/${curUser._id}/edit`} className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
                    Edit
                  </Link>
                </td>

                {/* Delete Button */}
                <td className="px-6 py-4 text-center">
                  <button onClick={()=>deleteServices(curUser._id)} className="bg-red-600 text-white px-4 py-1 rounded-md text-sm hover:bg-red-700 transition">
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

export default AdminService
