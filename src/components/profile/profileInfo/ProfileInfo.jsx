
import styles from './ProfileInfo.module.css'
import loader from '../../../photo/loader.gif'
import ProfileStatus from './profileStatus'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetUserProfile, GetUserStatus, profileIsUpdatedAC, saveProfile, UpdateUserPhoto } from '../../../redux/profile-reducer'
import { useEffect } from 'react'
import { useState } from 'react'
import { Btn } from '../../reusable/button'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({ profile, isOwner }) => {

    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const status = useSelector(state => state.profile.status)
    const params = useParams()
    const dispatch = useDispatch()
    const [Update, setUpdate] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const EnterEditmode = () => {
        setEditMode(true)
        dispatch(profileIsUpdatedAC(''))
    }

    const selectPhoto = async (e) => {
        if (e.target.files.length) {
            await dispatch(UpdateUserPhoto(e.target.files[0]))
                .then(() => {
                    setUpdate(!Update)
                    e.target.value = null
                })
        }
    }

    useEffect(() => {
        dispatch(GetUserStatus(params))
        dispatch(GetUserProfile(params))
    }, [null, params, Update,])


    if (!profile) return <img src={loader} />

    const onSubmit = (formData) => {
        dispatch(saveProfile(formData)).then(
            () => {
                dispatch(GetUserProfile(params))
                setEditMode(false)

            }
        )
        // setTimeout(() => {
        // }, 2000);


    }
    // debugger
    return <div className={styles.descriptionBlock}>
        <div className={styles.main_info}>

            <img src={profile.photos.large || userPhotoUrl} className={styles.avatar} />

            {isOwner == params.userId && <><input type='file' onChange={selectPhoto} /></>}

            <ProfileData EnterEditmode={EnterEditmode} isOwner={isOwner} dispatch={dispatch} profile={profile} status={status} params={params} />
            {editMode ?
                <ProfileDataForm
                    dispatch={dispatch}
                    onSubmit={onSubmit}
                    initialValues={profile}
                    profile={profile}
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
                :
                null
            }

        </div>

    </div>
}
const ProfileData = ({ EnterEditmode, profile, status, params, dispatch, isOwner }) => {


    const Contact = ({ contactTitle, contactValue }) => {
        return <div><b>{contactTitle}</b>: {contactValue}</div>
    }


    return <div className={styles.contacts}>
        <span className={styles.fullname}>{profile.fullName} </span><br />
        <ProfileStatus params={params} dispatch={dispatch} status={status} />

        <div style={{ marginTop: '10px', }}>
            <div><b>looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}<br /></div>

            {
                profile.lookingForAJob &&
                <div><b>my professional skills</b>:{profile.lookingForAJobDescription}<br /></div>
            }

            {
                profile.aboutMe &&
                <div><b>about me</b>: {profile.aboutMe}<br /></div>

            }

            <div></div>
        </div>
        {Object.keys(profile.contacts).map(key => {
            if (profile.contacts[key]) return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
        {isOwner == params.userId && <><Btn onClick={() => { EnterEditmode() }}>Edit</Btn></>}
    </div>
}
export default ProfileInfo