import './post.css';
import pp from '../../media/images/profilePicture.jpg';
import userPicture from '../../media/images/messenger/005.jpg';
import post from '../../media/images/post/post000.jpg';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiComment, BiDotsHorizontalRounded, BiLike, BiWorld, BiHappyAlt, BiCamera, BiSticker } from 'react-icons/bi';
import { MdOutlineGroup } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri';

const Post = () => {
  return (
    <div className='postContainer'>

      <div className='postHeader'>
        <div className='postUser'>
          <div className='postUserLeft'>
            <img src={userPicture} alt='' className='postUserImg' />
            <div className='postUserinside'>
              <p className='postUserinsideText'>
                Username
              </p>
              <div className='postUserinsideTime'>
                <span> 1h </span>
                ·
                <MdOutlineGroup className='tagFriends' />
              </div>
            </div>
          </div>
        </div>
        <BiDotsHorizontalRounded className='postMoreOptions' />
      </div>
      <img src={post} className='postImage' alt='post' />
      <div className='postFooter'>
        <p className='postUserinsideText'>
          S P I D E R K I D
        </p>
        <span className='postUserinsideTime'>
          23 de agosto a las 10:03
          <BiWorld className='tagFriends' />
        </span>
        <p className='postUserinsideTextDesc'>
          Por que será?
        </p>
      </div>
      <div className='postShareSection'>
        <p className='postBottomItem'>
          <BiLike className='postBottomItemSVG' />
          Me gusta
        </p>
        <p className='postBottomItem'>
          <BiComment className='postBottomItemSVG' />
          Comentar
        </p>
        <p className='postBottomItem'>
          <RiShareForwardLine className='postBottomItemSVG' />
          Compartir
        </p>
      </div>
      <div className='postCommentSection' >
        <span className='onlineComment'> </span>
        <img src={pp} alt='' className='postUserImg' />
        <input style={{ width: '100%' }} type="text" className="logoBuscar" placeholder='Escribe un comentario...' />
        <div className='postCommentIcons'>
          <BiHappyAlt className='postCommentIconsSVG' />
          <BiCamera className='postCommentIconsSVG' />
          <AiOutlineFileGif className='postCommentIconsSVG' />
          <BiSticker className='postCommentIconsSVG' />
        </div>
      </div>
    </div>
  )
}

export default Post
