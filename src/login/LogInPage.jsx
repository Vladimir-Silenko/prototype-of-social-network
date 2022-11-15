
import { reduxForm, Field } from "redux-form"
import { useDispatch } from 'react-redux'
import { LoginData } from '../redux/auth-reducer'
import styled from 'styled-components'
import { Input } from "../components/reusable/input"


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Email' name={'Email'} component={Input} />
        </div>
        <div>
            <Field placeholder='Password' name={'Password'} component={Input} type={'password'} />
        </div>
        <div>
            <Field component={'input'} name={'RememberMe'} type={'checkbox'} /> Remember Me
        </div>
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LogInPage = (props) => {
    const dispatch = useDispatch()
    const Submit = (formData) => {
        dispatch(LoginData(formData.Email, formData.Password, formData.RememberMe))
    }
    return <div>
        <h1>LogIn</h1>
        <LoginReduxForm onSubmit={Submit} />
    </div>
}
export { LogInPage }