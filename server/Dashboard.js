import React,{useContext , useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'
const Dashboard = () => {
    const {user , getUser,logout} =  useContext(AuthContext)
    useEffect(()=>{
        getUser()
    },[])

    const log_out = () =>{
        logout()
        window.location.reload(false)
    }

    return (
        <div>
            hello , {user && user.name}!
            <button onClick={log_out}>logout</button>
        </div>
    )
}

export default Dashboard
