
import { Btn } from '../../reusable/button'
import styled from 'styled-components'
import { Input } from '../../reusable/input'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../reusable/Textarea'
import { useSelector } from 'react-redux'
const CancelBtn = styled(Btn)`
margin-left:655px;
margin-bottom:550px;
width:30px;
border:none;
background:transparent;
font-size:20px;
`
const ModalContainer = styled.div`
position:fixed;
height:100vh;
width:100vw;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0,0,0,0.4);
color: white;
`
const ModalContent = styled.div`
width:600px;
height:500px;
padding:10px;
background:#ededed;
color:black;
position:absolute;
`

const ProfileDataForm = (props) => {
    const isUpdated = useSelector(state => state.profile.isUpdated)
    return (
        <ModalContainer>

            <ModalContent>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <b>Looking for a job</b>:<Field value={'hey'} component={'input'} name='lookingForAJob' type={'checkbox'} />
                    </div>

                    <div>
                        <b>Full name</b>: <Field placeholder='Enter your full name' name='fullName' component={Input} />
                    </div>
                    <div>
                        <b>About me</b>: <Field placeholder='About me' name='aboutMe' component={Input} />
                    </div>

                    <div>
                        <b>my professional skills</b>:<Field placeholder='Describe your skills' name='lookingForAJobDescription' component={Textarea} />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {Object.keys(props.profile.contacts).map(item => {
                            return <div key={item}>
                                <b>{item}:</b>  <Field key={item} placeholder={item} name={'contacts.' + item} component={Input} />
                            </div>
                        })}

                    </div>
                    <Btn>Save</Btn><br />
                    {props.error && <div style={{ color: '#E60C0C' }}>{props.error}</div>
                        // :
                        // <span style={{ color: 'green' }}>{isUpdated}</span>
                    }
                    { }
                </form>

            </ModalContent>
            <CancelBtn onClick={() => props.setEditMode(!props.editMode)}>x</CancelBtn>
        </ModalContainer>
    )


}
const ProfileDataReduxForm = reduxForm({ form: "profile", enableReinitialize: true, })(ProfileDataForm)
export default ProfileDataReduxForm