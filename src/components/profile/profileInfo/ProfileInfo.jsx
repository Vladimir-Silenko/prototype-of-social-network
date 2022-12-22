
import styles from './ProfileInfo.module.css'
import loader from '../../../photo/loader.gif'
import ProfileStatus from './profileStatus'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetUserStatus } from '../../../redux/profile-reducer'
import { useEffect } from 'react'
const ProfileInfo = (props) => {

    const status = useSelector(state => state.profile.status)
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUserStatus(params))
    }, [])

    if (props.state === null) return <img src={loader} />
    return <div className={styles.descriptionBlock}>
        <div className={styles.main_info}>
            <img src={props.state.photos.large} className={styles.avatar} />
            <div className={styles.contacts}>

                <span className={styles.fullname}>{props.state.fullName} </span><br />
                <ProfileStatus params={params} dispatch={dispatch} status={status} />
                <span><a href='#'>{props.state.contacts.vk}</a> </span><br />
                <span><a href='#'>{props.state.contacts.twitter}</a> </span><br />
                <span><a href='#'>{props.state.contacts.facebook}</a> </span><br />
                <span> <a href='#'>{props.state.contacts.instagram}</a> </span><br />
            </div>
        </div>

    </div>
}
export default ProfileInfo