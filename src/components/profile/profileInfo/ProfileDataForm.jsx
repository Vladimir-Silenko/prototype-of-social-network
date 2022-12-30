
import { Btn } from '../../reusable/button'
import styled from 'styled-components'
import { Input } from '../../reusable/input'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../reusable/Textarea'
const Modal = styled.div`
grid-area: info;
display: block;
`

const ProfileDataForm = ({ state, handleSubmit }) => {


    return <Modal>
        <form onSubmit={handleSubmit}>
            <div>
                <b>Looking for a job</b>:<Field component={'input'} name={'LookingForAJob'} type={'checkbox'} />
            </div>

            <div>
                <b>Full name</b>: <Field placeholder='Enter your full name' name={'FullName'} component={Input} />
            </div>
            <div>
                <b>About me</b>: <Field placeholder='About me' name={'AboutMe'} component={Input} />
            </div>

            <div>
                <b>my professional skills</b>:<Field placeholder='Describe your skills' name={'LookingForAJobDescription'} component={Textarea} />
            </div>
            <Btn>Save</Btn>
        </form>

    </Modal>
}
const ProfileDataReduxForm = reduxForm({ form: 'editProfileForm' })(ProfileDataForm)
export default ProfileDataReduxForm