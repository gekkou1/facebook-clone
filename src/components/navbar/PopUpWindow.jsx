import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { notificationData } from '../../assets/notificationsData'

const ShowData = () => {
  const spreadData = notificationData.slice(0)

  return (
    <>
      {spreadData.map((notif) => (
        <div className="nofifListItem" key={notif.img}>
          <i className={''}></i>
          <img src={notif.img} className="notifImage" alt={notif.boldTitle} />
          <span className='notifListItemText'>
            <b>{notif.boldTitle}</b> {notif.message}
          </span>
        </div>
      ))}
    </>
  );
};

const PopUpWindow = (/*{ windowType, width }*/) => {
  return (
    <div className="notifContainer">

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
        <ShowData />
      </div>

    </div>
  )
};

export default PopUpWindow;
