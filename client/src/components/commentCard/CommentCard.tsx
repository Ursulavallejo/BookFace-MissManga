import { FC, useState, useEffect } from 'react'
import CommentService from '../api/service/CommentService'
import { ReadComment } from '../interfaces/IComments'
import './commentCard.css'
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

interface Props {
  messageId: string
  updateCounter: (num: number) => void
}


const CommentCard:FC<Props> = ({messageId, updateCounter}) => {

  const [comment, setComment] = useState('')
  const [user, setUser] = useState<string | null>('')
  const [data, setData] = useState<Array<ReadComment>>([])
  const [toggleInput, setToggleInput] = useState('')
  const [newComment, setNewComment] = useState('')


  useEffect(() => {
    setUser(localStorage.getItem("username"))
    getComments()
  }, [])

  const createCommentFunc = () => {
      const _newComment = {
          text: comment,
          name: user,
          messagekey: messageId
      }
      CommentService.createComment(_newComment)
      .then(res => {
          setComment('')
          getComments()
      })
  }

  const openEditField = (_id: string, text: string) => {
    setToggleInput(_id)
    setNewComment(text)
  }


  const getComments = () => {
    const messageKey = {
        messagekey: messageId
      }
      CommentService.searchByKey(messageKey)
      .then(response => {
        setData(response.data)
        updateCounter(response.data.length)

      })
      .catch(error => console.log(error))
    }

    const deleteComment = (_id: string) => {

      CommentService.deleteComment(_id)
               .then(response => {
               getComments()
            })
        .catch(error => console.log(error))
   }

   const cancelCommentFunc = () => {
    setToggleInput('')
   }

   const updateCommentFunc = () => {
    const _newComment = {
        text: newComment
    }

    CommentService.updateComment(toggleInput, _newComment)
    .then(res => {
        getComments()
        setToggleInput('')
    })
    .catch(error => console.log(error))
}



  return (
    <div className='comment-card'>
               {data.map(item => (
                 <div className="item-card">
                    <p className='item-name'>{item.name} :</p>
                  
                    {user === item.name && <p className='delete-comment' onClick={() => deleteComment(item._id)}><FaRegTrashAlt className='trashcan'/></p>}
                    {user === item.name && <p className='edit-comment' onClick={() => openEditField(item._id, item.text)}><FaRegEdit className='trashcan'/></p>}
                  {toggleInput === item._id ?
                  <>
                  <textarea 
                  value={newComment} 
                  className='edit-comment-input'
                  onChange={e => setNewComment(e.target.value)}
            />
            <div className='comment-buttons-area'>
            <button className='cancel-btn' onClick={() =>cancelCommentFunc()}>Cancel</button>
            <button className='post-comment-btn' onClick={() => updateCommentFunc()}>Post</button>
            </div>
            </>
            :   <p className='item-text'>{item.text}</p>
                  }
                 
                 </div>
               ))}
        <section className='comment-input-section'>
            <input 
                className='comment-input'
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button onClick={() => createCommentFunc()} className='send-btn' data-testid='btnSendCard' >Send</button>
        </section>
    </div>
  )
}

export default CommentCard