import './storiesFeed.css'
import profilePicture from '../../media/images/profilePicture.jpg';
import { storiesData } from '../../assets/storiesData';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const StoriesFeed = () => {
  const stories = storiesData.slice(0)
  return (
    <div className='storiesFeedContainer'>
      <div className='storiesCard' >
        <AiFillPlusCircle className='storiesPlus' />
        <img src={profilePicture} alt="" className="storiesImg" />
        <p className='storiesCreateText'>
          Crear historia
        </p>
      </div>

      {stories.map((storie) => (
        <div className='storiesCardUsers' key={storie.username}>
          <img src={storie.userPicture} alt={storie.username} className='storiesUserPicture' />
          <span className={storie.status}></span>
          <img src={storie.storie} alt={storie.username} className='storiesImgUsers' />
          <p className='storiesUsername'>
            {storie.username}
          </p>
        </div>
      ))}

      <BsFillArrowRightCircleFill className='storiesMore' />
    </div>
  )
}

export default StoriesFeed;
