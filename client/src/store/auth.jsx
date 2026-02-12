import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{


    const[isloading,setIsloading]=useState(true)
    const [token,setToken]=useState(localStorage.getItem('token'))
    const[user,setUser]=useState('')
    const authorizationToken=`Bearer ${token}`
    const[services,setServices]=useState([])
    const API=import.meta.env.VITE_APP_URI_API;

    const storetokenInLS=(serverToken)=>{
        setToken(serverToken)//without it we need to reload page after login so logout button can show
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
            setIsloading(true)
            const response=await fetch(`${API}/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            })
            if(response.ok){
                const data=await response.json()
                console.log("user data ",data.userData)
                setUser(data.userData)
                setIsloading(false)
            }else{
                console.log("Error fetching user data")
                setIsloading(false)
            }
        } catch (error) {
            console.log('Error fetching user data')
        }
    }


    const getServices=async () => {
        try {
            const response=await fetch(`${API}/api/data/poem`,{
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

    return <AuthContext.Provider value={{storetokenInLS,LogoutUser,isLoggedIn,user,services,authorizationToken,isloading,API,getServices}}>
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