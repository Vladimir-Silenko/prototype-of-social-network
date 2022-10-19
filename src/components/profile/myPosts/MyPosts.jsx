
import Post from './post/Post';
import classes from './MyPosts.module.css';
// import { postData } from '../../..';

const MyPosts = (props) => {
    let posts = props.postData.map(p => (<Post id={p.id} message={p.post} likes={p.likes} />))
    return <div className={classes.postContainer}>
        {posts}
    </div>


}
export default MyPosts;