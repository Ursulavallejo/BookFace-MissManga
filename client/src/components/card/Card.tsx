import { FC, useEffect, useState } from "react";
import MessageService from "../api/service/MessageService";
import EditMessage from "../editMessage/EditMessage";
import Menu from "../menu/Menu";
import "./card.css";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import CommentCard from "../commentCard/CommentCard";
import moon from "../../img/userSailorMoon.png";
import venus from "../../img/userSailorVenus.png";
import UserService from "../api/service/UserService";
import CommentService from "../api/service/CommentService";

interface Props {
  message: string;
  username: string;
  id: string;
  getAllMesages: () => void;
}

const Card: FC<Props> = ({ message, username, id, getAllMesages }) => {
  const [menu, setMenu] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleComments, setToggleComments] = useState(false);
  const [userId, setUserId] = useState<string | null>("");
  const [counter, setCounter] = useState(0)


  useEffect(() => {
    getComments()
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const deleteMessageFunc = () => {
    MessageService.deleteMessage(id)
      .then((res) => {
        console.log(res.data);
        getAllMesages();
        toggleMenu();
      })
      .catch((error) => console.log(error));
  };

  const toggleEditFunc = () => {
    setToggleEdit(!toggleEdit);
    toggleMenu();
  };

  const updateMessage = (_message: string) => {
    const _newMessage = {
      message: _message,
    };

    MessageService.updateMessage(id, _newMessage)
      .then((res) => {
        setToggleEdit(!toggleEdit);
        getAllMesages();
      })
      .catch((error) => console.log(error));
  };

  const foldCommentsFunc = () => {
    setToggleComments(!toggleComments);
  };


  const getComments = () => {
    const messageKey = {
      messagekey: id
    }

    CommentService.searchByKey(messageKey)
    .then(response => {
        updateCounter(response.data.length)
    })
    .catch(error => console.log(error))
  
  }

    
  const updateCounter = (num: number) => {
    setCounter(num)
  }

  return (
    <>
      <div className="card">
        <div className="image-name-div">
          <h3 className="card-name">{username}:</h3>
        </div>
        <p className="card-message">{message}</p>
        <p className="comments" onClick={() => foldCommentsFunc()}>
          <span className="counter">{counter}</span>
          Comments
          {toggleComments ? (
            <IoMdArrowDropdown className="arrow" />
          ) : (
            <IoMdArrowDropright className="arrow" />
          )}
        </p>
        <div className="circle" onClick={() => toggleMenu()}>
          <span className="dots">...</span>
        </div>
        {menu && (
          <Menu
            deleteMessageFunc={deleteMessageFunc}
            toggleEditFunc={toggleEditFunc}
          />
        )}
        {toggleEdit && (
          <EditMessage message={message} updateMessage={updateMessage} />
        )}
      </div>

      {toggleComments && <CommentCard messageId={id} updateCounter={updateCounter}/>}
    </>
  );
};

export default Card;
