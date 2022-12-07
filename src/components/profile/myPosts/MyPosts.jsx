
import Post from './post/Post';
import classes from './MyPosts.module.css';
import { useSelector } from 'react-redux';

const MyPosts = (props) => {
    let posts = useSelector(state => state.profile.postData)
    posts = posts.map(p => (<Post key={p.id} message={p.post} likes={p.likes} />))
    return <div className={classes.postContainer}>
        {posts}
    </div>


}
export default MyPosts;