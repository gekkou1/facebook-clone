import './postFeed.css';
import profilePicture from '../../media/images/profilePicture.jpg';
import { FaImages, FaVideo } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi';

const PostFeed = () => {
  return (
    <div className="postFeedContainer">
      <div className="postTopFeed" >
        <img src={profilePicture} className='postPicture' alt="user" />
        <input type="text" className="messengerSearch" placeholder="¿Qué estás pensando?" />
      </div>
      <div className="postBottomFeed" >
        <span className='postBottomItem' >
          <FaVideo className='postBottomItemSVG SVGRed' />
          Video en vivo
        </span>
        <span className='postBottomItem' >
          <FaImages className='postBottomItemSVG SVGGreen' />
          Foto/video
        </span>
        <span className='postBottomItem' >
          <BiHappyAlt className='postBottomItemSVG SVGYellow' />
          Sentimiento/actividad
        </span>
      </div>
    </div>
  )
}

export default PostFeed
