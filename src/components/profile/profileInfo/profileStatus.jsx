import { useState } from "react"
import { GetUserStatus, UpdateUserStatus } from "../../../redux/profile-reducer"

const ProfileStatus = ({ params, dispatch, status }) => {

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
                    dispatch(GetUserStatus(params))
                }} type="text" name="" id="" />
            </div>}
        {!editMode &&
            <div>
                <span style={{ fontWeight: "bold" }} onDoubleClick={() => setState(true)} >
                    {statusText || 'no status'}
                </span>
            </div>}
    </div>
}
export default ProfileStatus 