
import Post from './post/Post';
import classes from './MyPosts.module.css';
import { useSelector } from 'react-redux';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const posts = useSelector(state => state.profile.postData)
    console.log(posts)
    return <MyPosts posts={posts} />
}
export default MyPostsContainer;