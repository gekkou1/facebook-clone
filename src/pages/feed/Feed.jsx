import Navbar from '../../components/navbar/Navbar';
import LeftSideBar from '../../components/feed/LeftSideBar';
import NewsFeed from '../../components/feed/NewsFeed';
import RightSideBar from '../../components/feed/RightSideBar';
import './feed.css';

const Feed = () => {
  return (
    <>
      <Navbar />
      <div className='feed'>
        <LeftSideBar />
        <NewsFeed />
        <RightSideBar />
      </div>
    </>
  )
}

export default Feed;
