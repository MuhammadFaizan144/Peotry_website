import React, { useState } from 'react'
import { signUpandLoginBG } from '../assets'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddPoems = () => {
    const navigate = useNavigate()

    const [add, setAdd] = useState({
        type: "",
        writer: "",
        content: "",
    })
    const { API } = useAuth()
    const handleInput = (e) => {
        console.log(e)
        let name = e.target.name
        let value = e.target.value

        setAdd({
            ...add,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API}/api/admin/service/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(add)
            })
            const res_data = await response.json();
            console.log("res from server", res_data)

            if (response.ok) {

                setAdd(
                    {
                        type: "",
                        writer: "",
                        content: "",
                    }
                )
                // await getServices()
                toast.success("Added Succesful")
                navigate('/');

            }
        }
        catch (error) {
            console.log("Error during adding", error)
        }
    }
    return (
        <div className="relative h-screen w-full">

            {/* Background Image */}
            <img
                src={signUpandLoginBG}
                alt="background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay  */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Login Card */}
            <div className="absolute inset-0 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-[350px] shadow-lg flex flex-col gap-4">

                    <h2 className="text-2xl font-bold text-center">Add Poem or Poetry</h2>


                    <div className="flex flex-col gap-1">
                        <label>Type</label>
                        <input
                            type="text" name="type" id='type' required autoComplete="off" placeholder='Enter Type' value={add.type} onChange={handleInput}
                            className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Writer</label>
                        <input
                            type="text" name="writer" placeholder='Enter Writer Name' id='writer' required autoComplete="off" value={add.writer} onChange={handleInput}
                            className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Content</label>
                        <textarea
                            type="text"
                            placeholder="Enter Your Message" name="content" id='content' required autoComplete="off" value={add.content} onChange={handleInput}
                            className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default AddPoems
