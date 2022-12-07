
import ProfileInfo from './profileInfo/ProfileInfo';
import SendPostContainer from './sendPost/SendPost container';
import { GetUserProfile } from '../../redux/profile-reducer';
import { useDispatch, useSelector, } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { useAuth } from '../../redux/selectors';
import MyPosts from './myPosts/MyPosts';


let ProfileContainer = (props) => {
    const st = useSelector(state => state.profile)
    const redirect = useRedirect()
    // const auth = useSelector(state => state.auth.isAuth)
    const [isAuth, setAuth] = useState(useAuth())
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(GetUserProfile(params))
        setAuth(isAuth)
    }, [null])

    if (!useAuth()) return redirect


    return <div >

        <ProfileInfo state={st.profile} />
        <SendPostContainer state={st} />
        <MyPosts />
    </div >
}
export default ProfileContainer;