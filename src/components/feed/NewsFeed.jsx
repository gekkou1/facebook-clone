import StoriesFeed from './StoriesFeed';
import PostFeed from './PostFeed';
import Post from './Post';

const NewsFeed = () => {
  return (
    <div className='feedNews'>
      <StoriesFeed />
      <PostFeed />
      <Post />
    </div>
  )
}

export default NewsFeed;
