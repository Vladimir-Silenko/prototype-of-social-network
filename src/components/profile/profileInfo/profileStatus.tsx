import React, { ChangeEvent, useEffect } from "react"
import { useState } from "react"
import { GetUserStatus, UpdateUserStatus } from "../../../redux/profile-reducer"

type ProfileStatusPropstype = {
    params: number
    dispatch: any
    status: string
}

const ProfileStatus: React.FC<ProfileStatusPropstype> = ({ params, dispatch, status }) => {
    const [statusText, setStatusText] = useState<string>(status)
    const [editMode, setState] = useState<boolean>(false)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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