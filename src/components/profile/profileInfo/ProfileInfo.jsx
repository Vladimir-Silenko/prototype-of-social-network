
import styles from './ProfileInfo.module.css'
import loader from '../../../photo/loader.gif'
import ProfileStatus from './profileStatus'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetUserProfile, GetUserStatus, saveProfile, UpdateUserPhoto } from '../../../redux/profile-reducer'
import { useEffect } from 'react'
import { useState } from 'react'
import { Btn } from '../../reusable/button'
import ProfileDataForm from './ProfileDataForm'




const ProfileInfo = ({ state, isOwner }) => {

    const userPhotoUrl = 'https://thumbs.dreamstime.com/b/%D0%BE%D1%87%D0%B5%D0%BD%D1%8C-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B9-%D0%BC-%D0%B0-%D0%B5%D0%BD%D0%B5%D1%86-39968623.jpg'
    const status = useSelector(state => state.profile.status)
    const params = useParams()
    const dispatch = useDispatch()
    const [Update, setUpdate] = useState(false)
    const [editMode, setEditMode] = useState(false)



    const selectPhoto = (e) => {
        if (e.target.files.length) {
            dispatch(UpdateUserPhoto(e.target.files[0]))
        }
        setTimeout(() => {
            setUpdate(!Update)
        }, 2000);
        e.target.value = null

    }

    useEffect(() => {
        dispatch(GetUserStatus(params))
        dispatch(GetUserProfile(params))
    }, [null, params, Update])


    if (!state) return <img src={loader} />

    const onSubmit = (formData) => {
        dispatch(saveProfile(formData))
        setEditMode(!editMode)
    }

    return <div className={styles.descriptionBlock}>
        <div className={styles.main_info}>

            <img src={state.photos.large || userPhotoUrl} className={styles.avatar} />

            {isOwner == params.userId && <><input type='file' onChange={selectPhoto} /></>}

            {editMode ?
                <ProfileDataForm onSubmit={onSubmit} state={state} />
                :
                <ProfileData editMode={editMode} setEditMode={setEditMode} isOwner={isOwner} dispatch={dispatch} state={state} status={status} params={params} />
            }

        </div>

    </div>
}
const ProfileData = ({ editMode, setEditMode, state, status, params, dispatch, isOwner }) => {


    const Contact = ({ contactTitle, contactValue }) => {
        return <div><b>{contactTitle}</b>: {contactValue}</div>
    }


    return <div className={styles.contacts}>
        <span className={styles.fullname}>{state.fullName} </span><br />
        <ProfileStatus params={params} dispatch={dispatch} status={status} />

        <div style={{ marginTop: '10px', }}>
            <div><b>looking for a job</b>: {state.lookingForAJob ? 'yes' : 'no'}<br /></div>

            {
                state.lookingForAJob &&
                <div><b>my professional skills</b>:{state.lookingForAJobDescription}<br /></div>
            }

            {
                state.aboutMe &&
                <div><b>about me</b>: {state.aboutMe}<br /></div>

            }

            <div></div>
        </div>
        {Object.keys(state.contacts).map(key => {
            if (state.contacts[key]) return <Contact key={key} contactTitle={key} contactValue={state.contacts[key]} />
        })}
        {isOwner == params.userId && <><Btn onClick={() => setEditMode(!editMode)}>Edit</Btn></>}
    </div>
}
export default ProfileInfo