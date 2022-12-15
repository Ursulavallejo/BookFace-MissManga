import { FC, useEffect, useState } from 'react'
import UserService from '../api/service/UserService'
import './onlineUsers.css'
import { ReadUser } from '../../components/interfaces/IUser'

interface Props {
    getOnlineUsers: () => void
    onlineUsers: Array<ReadUser>
}


const OnlineUsers:FC<Props> = ({getOnlineUsers, onlineUsers}) => {
    

    useEffect(() => {
        getOnlineUsers()
    },[])


    
  return (
    <div className='online-users-container'>
        <h2 className='online-user-heading' data-testid='onlineUser'>  Online Users: </h2>
        <div>
            {onlineUsers.map(user => (
                <div  className='online-username-div'>
                <p className='green-dot'></p>
                <p className='online-username' data-testid='dbResponse'>{user.username}</p>
                </div>
            ))}
        </div>
    
    </div>
  )
} 

export default OnlineUsers