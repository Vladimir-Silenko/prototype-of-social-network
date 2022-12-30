
import { reduxForm, Field } from "redux-form"
import { useDispatch, useSelector } from 'react-redux'
import { LoginData } from '../redux/auth-reducer'
import styled from 'styled-components'
import { Input } from "../components/reusable/input"
import { Btn } from "../components/reusable/button"
import { required } from '../utils/validators'
import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { SetCurrentUser } from "../redux/navbar-reducer"
const FormBlock = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`
const ErrorBlock = styled.div`
background:#E60C0C;
color:#fff;

`
const LoginForm = ({ handleSubmit, error }) => {
    // debugger
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.isAuth)
    let userId = useSelector(state => state.auth.userId)
    useEffect(() => { dispatch(SetCurrentUser()) }, [])
    if (auth) return <Navigate to={`../profile/${userId}`} />
    return (
        <FormBlock>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={required} placeholder='Email' name={'Email'} component={Input} />
                </div>
                <div>
                    <Field validate={required} placeholder='Password' name={'Password'} component={Input} type={'password'} />
                </div>
                <ErrorBlock>{error}</ErrorBlock>
                <div>
                    <Field component={'input'} name={'RememberMe'} type={'checkbox'} /> Remember Me
                </div>
                <div>
                    <Btn>Log in</Btn>
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