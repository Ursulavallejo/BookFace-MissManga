import { FC, useState, useEffect } from 'react'
import './editUser.css'
import { GrClose } from "react-icons/gr";
import UserService from '../api/service/UserService';

interface Props {
    toggleEditFunc: () => void
    getOnlineUsers: () => void
    editUsername: string
    editEmail: string
    editPassword: string
}

const EditUser:FC<Props> = ({toggleEditFunc, getOnlineUsers, editUsername, editEmail, editPassword}) => {

    const [newUsername, setNewUsername] = useState(editUsername)
    const [newEmail, setNewEmail] = useState(editEmail)
    const [newPassword, setNewPassword] = useState(editPassword)
    const [userId, setUserId] = useState<string | null>('')

    useEffect(() => {

    setUserId(localStorage.getItem("userId"))
    
    }, [])

   
    const updateUser = () => {
        if(newUsername && newEmail && newPassword) {

        const _updateUser = {
            username: newUsername,
            email: newEmail,
            password: newPassword,
            active: true
        }

        console.log(_updateUser, userId)

        UserService.updateUserById(userId, _updateUser)
        .then(res => {
            toggleEditFunc()
            getOnlineUsers()
            localStorage.setItem("username", newUsername)
        
        })
        .catch(error => console.log(error))   
    }
    else {
        alert('All fields need to be filled in')
    } 
    }

  return (
    <div className='edit-user-window'>
        <GrClose className='close' onClick={() => toggleEditFunc()}/>
        <h1 className='edit-user-headline' data-testid='editProfile'>Edit Profile</h1>
        <section className='edit-username-section'>
        <h2 className='edit-username'>Username:</h2>
            <input data-testid='inputEditUser'
                type="text"
                value={newUsername}
                className="edit-username-input" 
                onChange={e => setNewUsername(e.target.value)}
                
            />
        </section>
        <section className='edit-email-section'>
        <h2 className='edit-email'>Email:</h2>
            <input 
                type="text"
                className="edit-email-input" 
                onChange={e => setNewEmail(e.target.value)}
                value={newEmail}
            />
        </section>
        <section className='edit-password-section'>
        <h2 className='edit-password' data-testid='textPassword'>Password:</h2>
            <input data-testid='textInputPassword'
                type="text"
                className="edit-password-input" 
                onChange={e => setNewPassword(e.target.value) }
                placeholder="*****"
            />
        </section>
        <section className='edit-user-btn-area'>
            <button className='edit-user-cancel-btn' data-testid='btnCancel' onClick={() =>toggleEditFunc()}>Cancel</button>
            <button className='edit-user-save-btn' data-testid='btnEditSave' onClick={() => updateUser() }>Save</button>
        </section>
    </div>
  )
}

export default EditUser