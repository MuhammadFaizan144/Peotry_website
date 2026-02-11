import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AdminUpdateContact = () => {
    const navigate=useNavigate()
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const params = useParams();
    console.log("params single user: ", params);
    const { authorizationToken } = useAuth();

    //   get single user data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/admin/contact/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users single data:  ${data}`);
            setContact(data);

            //   if (response.ok) {
            //     getAllUsersData();
            //   }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setContact({ 
            ...contact,
            [name]: value 
        })
    };
    const handleSubmit=async (e) => {
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:3000/api/admin/contact/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",//importatnt for updating in bankend
                    Authorization:authorizationToken,
                },
                body:JSON.stringify(contact),
            })
            if(response.ok){

                toast.success(("Update Successful"))
                navigate('/admin/contact')
            }else{
                toast.error(("Not Updated"))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">

                {/* Title */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center border-b pb-3">
                    Update Contact Data
                </h1>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="username"
                            className="text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                            value={contact.username}
                            onChange={handleInput}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter username"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            value={contact.email}
                            onChange={handleInput}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <input
                            type="tel"
                            name="message"
                            id="message"
                            autoComplete="off"
                            value={contact.message}
                            onChange={handleInput}
                            required
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter mobile number"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Update
                    </button>

                </form>
            </div>
        </section>
    );
};
export default AdminUpdateContact;