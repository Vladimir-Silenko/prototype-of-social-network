import axios from 'axios';
import styles from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import MyPostsContainer from './myPosts/MyPosts-container';
import { setUserProfileAC } from '../../redux/profile-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
let ProfileContainer = (props) => {
    const st = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`).then(response => {
            dispatch(setUserProfileAC(response.data))
        })

    }, [null])

    return <div >
        <>
            <div className={styles.banner}>
                <img src='https://photographylife.com/wp-content/uploads/2020/03/Ultra-Wide-Angle-Panoramas-1.jpg' />
            </div>
        </>
        <ProfileInfo
            state={st.profile}

        />
        <SendPostContainer state={st} />
        <MyPostsContainer />
    </div >
}
export default ProfileContainer;