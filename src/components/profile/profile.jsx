import MyPosts from './myPosts/MyPosts';
import SendPost from './sendPost/SendPost';
import classes from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import MyPostsContainer from './myPosts/MyPosts-container';
let Profile = (props) => {
    // debugger
    return <div >
        <div className={classes.banner}>
            <img src='https://photographylife.com/wp-content/uploads/2020/03/Ultra-Wide-Angle-Panoramas-1.jpg' />
        </div>
        <ProfileInfo />
        <SendPostContainer
            store={props.store}
        />
        <MyPostsContainer />
    </div>
}
export default Profile;