
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import { GetUserProfile } from '../../redux/profile-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { useAuth } from '../../redux/selectors';
import MyPosts from './myPosts/MyPosts';


let ProfileContainer = (props) => {

    const userId = useSelector(state => state.auth.userId)
    const redirect = useRedirect()
    const [isAuth, setAuth] = useState(useAuth())
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(GetUserProfile(params))
        setAuth(isAuth)
    }, [null, params,])
    const st = useSelector(state => state.profile)



    if (!useAuth()) return redirect
    return <div >

        <ProfileInfo isOwner={userId} profile={st.profile} />
        <SendPostContainer state={st} />
        <MyPosts />
    </div >
}
export default ProfileContainer;