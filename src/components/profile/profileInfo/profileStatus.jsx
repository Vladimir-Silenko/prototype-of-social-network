import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { GetUserStatus, UpdateUserStatus } from "../../../redux/profile-reducer"
const ProfileStatus = (props) => {
    const status = useSelector(state => state.profile.status)
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUserStatus(params))
    }, [])
    const [statusText, setStatusText] = useState(status)
    const [editMode, setState] = useState(false)
    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)

    }

    return <div>
        {editMode &&
            <div>
                <input value={statusText} onChange={onStatusChange} style={{ outline: "none" }} autoFocus={true} onBlur={() => {
                    setState(false)
                    dispatch(UpdateUserStatus(statusText))
                    console.log(status)
                }} type="text" name="" id="" />
            </div>}
        {!editMode &&
            <div>
                <span style={{ fontWeight: "bold" }} onDoubleClick={() => setState(true)} >{statusText}</span>
            </div>}
    </div>
}
export default ProfileStatus 