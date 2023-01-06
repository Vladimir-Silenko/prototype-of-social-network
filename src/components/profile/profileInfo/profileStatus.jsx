import { useEffect } from "react"
import { useState } from "react"
import { GetUserStatus, UpdateUserStatus } from "../../../redux/profile-reducer"

const ProfileStatus = ({ params, dispatch, status }) => {
    const [statusText, setStatusText] = useState(status)
    const [editMode, setState] = useState(false)

    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)
    }

    useEffect(() => {
        setStatusText(status)
    }, [null, status])


    return <div>
        {editMode &&
            <div>
                <input value={statusText} onChange={onStatusChange} style={{ outline: "none" }} autoFocus={true} onBlur={() => {
                    dispatch(UpdateUserStatus(statusText))
                    dispatch(GetUserStatus(params))
                    setState(false)
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