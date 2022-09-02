import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineFullscreen } from 'react-icons/ai'
import { RiVideoAddFill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import { notificationData } from '../../assets/notificationsData';
import { messengerData } from '../../assets/messengerData';


const PopUpWindow = ({ windowType, width }) => {

  const notification = notificationData.slice(0)
  const messages = messengerData.slice(0)

  return (
    <div className="notifContainer">
      {windowType === 'notification'
        ?
        <>
          <div className='notifWrapper'>
            <div className="notifHeader">
              <h1>Notificaciones</h1>
              <BiDotsHorizontalRounded />
            </div>

            <div className="notifHeaderOptions">
              <span className="notifHeaderOptionsItems azulMasBG">
                Todas
              </span>
              <span className="notifHeaderOptionsItems">
                No leídas
              </span>
            </div>
            <span className='nuevas'>
              Nuevas
            </span>
          </div>

          <div className="notifList">
            {
              notification.map((notif) => (
                <div className="nofifListItem" key={notif.img}>
                  <i className={notif.icon}></i>
                  <img src={notif.img} className="notifImage" alt={notif.boldTitle} />
                  <span className='notifListItemTextUnread'>
                    <b>{notif.boldTitle}</b> {notif.message}
                  </span>
                </div>
              ))
            }
          </div>

        </>
        :
        <>
          <div className='notifWrapper'>
            <div className="messengerHeader">
              <h1>Chats</h1>
              <div className='messengerIcons'>
                <BiDotsHorizontalRounded />
                <AiOutlineFullscreen />
                <RiVideoAddFill />
                <BsPencilSquare />
              </div>
            </div>
            <input type="text" className="messengerSearch" placeholder="Buscar en Messenger clone" />

            <div className="notifHeaderOptions">
            </div>
          </div>

          <div className="notifList">
            {
              messages.map((message) => (
                <div className="nofifListItem" key={message.img}>
                  <img src={message.img} className="notifImage" alt={message.userName} />
                  <span className={message.readNotification}>
                    <b>{message.userName}</b>
                    <p className={message.read}>{message.message}</p>
                  </span>
                  {/* <span className='unreadedNotif'></span> */}
                </div>
              ))
            }
          </div>

        </>
      }

    </div>
  )
};

export default PopUpWindow;
