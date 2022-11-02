
import { useSelector } from 'react-redux';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const posts = useSelector(state => state.profile.postData)
    return <MyPosts posts={posts} />
}
export default MyPostsContainer;