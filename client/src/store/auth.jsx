import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'))
    const[user,setUser]=useState('')
    const[services,setServices]=useState([])

    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken)
    };

    
    //.  Logout functionality
    let isLoggedIn=!!token;


    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem('token')
    }

    //Authentication - to get the currently loggedIN user data
    const userAuthentication=async()=>{
        try {
            const response=await fetch(`http://localhost:3000/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            if(response.ok){
                const data=await response.json()
                console.log("user data ",data.userData)
                setUser(data.userData)
            }
        } catch (error) {
            console.log('Error fetching user data')
        }
    }


    const getServices=async () => {
        try {
            const response=await fetch(`http://localhost:3000/api/data/poem`,{
                method:'GET',
            })
            if(response.ok){
                const data=await response.json()
                console.log(data.msg)
                setServices(data.msg)
            }
        } catch (error) {
            console.log('Poem frontend ',error)
        }
    }


    useEffect(()=>{
        getServices()
        userAuthentication()
    },[])

    return <AuthContext.Provider value={{storetokenInLS,LogoutUser,isLoggedIn,user,services}}>
        {children}
    </AuthContext.Provider>
}
export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue;
}