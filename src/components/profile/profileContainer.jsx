
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import MyPostsContainer from './myPosts/MyPosts-container';
import { GetUserProfile } from '../../redux/profile-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import loader from '../../photo/loader.gif'


let ProfileContainer = (props) => {
    const st = useSelector(state => state.profile)
    const redirect = useRedirect()
    const auth = useSelector(state => state.auth.isAuth)
    const [isAuth, setAuth] = useState(auth)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(GetUserProfile(params))
        setAuth(auth)
    }, [null])

    if (!isAuth) return redirect


    return <div >

        <ProfileInfo state={st.profile} />
        <SendPostContainer state={st} />
        <MyPostsContainer />
    </div >
}
export default ProfileContainer;