import MyPosts from './myPosts/MyPosts';
import SendPost from './sendPost/SendPost';
import classes from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
let Profile = (props) => {
    return <div >
        <div className={classes.banner}>
            <img src='https://photographylife.com/wp-content/uploads/2020/03/Ultra-Wide-Angle-Panoramas-1.jpg' />
        </div>
        <ProfileInfo />
        <SendPost UpdatePostText={props.UpdatePostText} newPostText={props.newPostText} AddPost={props.AddPost} btn="Send post" />
        <MyPosts postData={props.postData} />
    </div>
}
export default Profile;