
import Post from './post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    let posts = props.posts.map(p => (<Post key={p.id} message={p.post} likes={p.likes} />))
    return <div className={classes.postContainer}>
        {posts}
    </div>


}
export default MyPosts;