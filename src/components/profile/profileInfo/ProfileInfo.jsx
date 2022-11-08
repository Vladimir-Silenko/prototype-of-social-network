import { useEffect } from 'react'
import styles from './ProfileInfo.module.css'
import loader from '../../../photo/loader.gif'
const ProfileInfo = (props) => {
    // debugger
    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
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