import { useState, useEffect } from 'react'
import MessageService from '../../components/api/service/MessageService'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import { ReadMessage } from '../../components/interfaces/IMessage'
import './main.css'
import sailormoon from '../../img/mainSailor.png'
import OnlineUsers from '../../components/onlineUsers/OnlineUsers'
import EditUser from '../../components/editUser/EditUser'
import UserService from '../../components/api/service/UserService'
import { ReadUser } from '../../components/interfaces/IUser'
import { useNavigate } from 'react-router-dom'




const Main = () => {
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<Array<ReadMessage>>([])
    const [username, setUsername] = useState<string | null>('')
    const [toggleEdit, setToggleEdit] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState<Array<ReadUser>>([])
    const [userId, setUserId] = useState<string | null>('')
    const [editUsername, setEditUsername] = useState('')
    const [editEmail, setEditEmail] = useState('')
    const [editPassword, setEditPassword] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
      getAllMesages()
      setUsername(localStorage.getItem("username"))
      setUserId(localStorage.getItem("userId"))
      console.log(username)
    }, [])

  

    const postMessageFunc = () => {
       
          const newMessage = {
            username: username,
            message: text,
          }

          MessageService.createMessage(newMessage)
          .then(response => {
             setText('')
             getAllMesages()
          })
          .catch(error => console.log(error))
    }


    const getAllMesages = () => {
      MessageService.getAllMessages()
      .then(response => {
        setMessages(response.data.sort((a:any ,b:any): any => {return 1}))
      })
    }

    const toggleEditFunc = () => {
      getUserFeatures()
      setToggleEdit(!toggleEdit)
     
    }

    const getOnlineUsers = () => {
      UserService.getOnlineUsers()
      .then(res => {
       setOnlineUsers(res.data)
       
      })
      .catch(error => console.log(error))
  }

  const getUserFeatures = () => {
    UserService.getUserById(userId)
    .then(res => {
        setEditUsername(res.data.username)
        setEditEmail(res.data.email)
        setEditPassword(res.data.password)
        console.log(res.data)
       
    })
    .catch(error => console.log(error))
}

const logOutFunc = () => {
    const updateActive = {
      newActiveStatus: false
    }

    UserService.changeActive(userId, updateActive)
    .then(res => {
      navigate('/')
    })
    .catch(error => console.log(error))
}




  return (
    <>
    <img src={sailormoon} alt="" className='sailors'/>
    <div className='edit-section'>
    <h2 className='header-name'>Hi {username}!</h2>
        <h2 className='edit-user-username'>Edit profile:</h2>
        <div className='edit-profile-buttons'>
        <button className='logout-btn' data-testid='btnTextLogOut' onClick={() => logOutFunc()}>Logout</button>
        <button className='logout-btn' data-testid='btnTextEdit'  onClick={() => toggleEditFunc()}>Edit</button>
        </div>
    </div>
    {toggleEdit && <EditUser toggleEditFunc={toggleEditFunc} getOnlineUsers={getOnlineUsers} editUsername={editUsername} editEmail={editEmail} editPassword={editPassword} />}
    <OnlineUsers getOnlineUsers={getOnlineUsers} onlineUsers={onlineUsers}/>
    <div>
        <div className='input-div' data-testid='dbResponse'>
        <textarea data-testid='textArea'
                  className='input-text'
          placeholder="write something..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='post-btn' data-testid='btnPost' onClick={() => postMessageFunc()}>POST</button>
        </div>
          {messages.map(msg => (
                <Card   message={msg.message} username={msg.username} id={msg._id} getAllMesages={getAllMesages}/>
          ))}
              
    </div>
    </>
  )
}

export default Main