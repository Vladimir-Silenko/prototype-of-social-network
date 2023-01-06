import { useEffect } from "react"
import { useState } from "react"
import { GetUserStatus, UpdateUserStatus } from "../../../redux/profile-reducer"

const ProfileStatus = ({ params, dispatch, status }) => {
    const [statusText, setStatusText] = useState(status)
    const [editMode, setState] = useState(false)
    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)
    }
    const getStatus = async () => {
        await dispatch(GetUserStatus(params))
            .then(() => {
                setStatusText(status)
                console.log(2)
            })
    }

    useEffect(() => {
        getStatus()
        console.log(1)
    }, [null, params])


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