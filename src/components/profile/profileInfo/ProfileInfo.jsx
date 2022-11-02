import { useEffect } from 'react'
import styles from './ProfileInfo.module.css'
import loader from '../../../photo/loader.gif'
const ProfileInfo = (props) => {
    // debugger
    // useEffect(() => { console.log(props.state) }, [null])
    if (props.state === null) return <img src={loader} />
    return <div className={styles.descriptionBlock}>
        <div className={styles.main_info}>
            <img src={props.state.photos.large} className={styles.avatar} />
            <div className={styles.contacts}>

                <span className={styles.fullname}>{props.state.fullName} </span><br />
                <span>{props.state.contacts.vk} </span><br />
                <span>{props.state.contacts.twitter}</span><br />
                <span>{props.state.contacts.facebook}</span><br />
                <span>{props.state.contacts.instagram}</span><br />
            </div>
        </div>

    </div>
}
export default ProfileInfo