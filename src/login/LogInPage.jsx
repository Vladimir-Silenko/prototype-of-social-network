
import { reduxForm, Field } from "redux-form"
import { useDispatch } from 'react-redux'
import { LoginData } from '../redux/auth-reducer'
import styled from 'styled-components'
import { Input } from "../components/reusable/input"
import { required } from '../utils/validators'
const FormBlock = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`

const LoginForm = (props) => {

    return (
        <FormBlock>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={required} placeholder='Email' name={'Email'} component={Input} />
                </div>
                <div>
                    <Field validate={required} placeholder='Password' name={'Password'} component={Input} type={'password'} />
                </div>
                <div>
                    <Field component={'input'} name={'RememberMe'} type={'checkbox'} /> Remember Me
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
        </FormBlock>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LogInPage = (props) => {
    const dispatch = useDispatch()
    const Submit = (formData) => {
        dispatch(LoginData(formData.Email, formData.Password, formData.RememberMe))
    }
    return <div>
        <h1 style={{ textAlign: 'center' }}>LogIn</h1>
        <LoginReduxForm onSubmit={Submit} />
    </div>
}
export { LogInPage }