import {FC} from 'react'
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import './menu.css'

interface Props {
    deleteMessageFunc: () => void
    toggleEditFunc: () => void
  
}

const Menu:FC<Props> = ({deleteMessageFunc, toggleEditFunc}) => {
  return (
    <div className='menu'>
    <p className='menu-delete' onClick={() => deleteMessageFunc()}><BsTrash className='trash-icon'/> Delete </p>
    <p className='menu-edit' onClick={() => toggleEditFunc()}><AiOutlineEdit className='edit-icon'/>Edit</p>
</div>
  )
}

export default Menu