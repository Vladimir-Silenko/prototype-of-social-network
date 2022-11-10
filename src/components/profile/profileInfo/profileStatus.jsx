import { useState } from "react"
const ProfileStatus = (props) => {
    const [editMode, setState] = useState(false)

    return <div>
        {editMode &&
            <div>
                <input style={{ outline: "none" }} autoFocus={true} onBlur={() => setState(false)} type="text" name="" id="" />
            </div>}
        {!editMode &&
            <div>
                <span style={{ fontWeight: "bold" }} onDoubleClick={() => setState(true)} > {props.status}</span>
            </div>}
    </div>
}
export default ProfileStatus 