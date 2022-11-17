
import { reduxForm, Field } from "redux-form"
import { useDispatch, useSelector } from 'react-redux'
import { LoginData } from '../redux/auth-reducer'
import styled from 'styled-components'
import { Input } from "../components/reusable/input"
import { required } from '../utils/validators'
import { Navigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { SetCurrentUser } from "../redux/navbar-reducer"
const FormBlock = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`

const LoginForm = (props) => {
    // debugger
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.isAuth)
    let userId = useSelector(state => state.auth.userId)
    useEffect(() => { dispatch(SetCurrentUser()) }, [])
    if (auth) return <Navigate to={`../profile/${userId}`} />
    return (
        <FormBlock>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={required} placeholder='Email' name={'Email'} component={Input} />
                </div>
                <div>
                    <Field validate={required} placeholder='Password' name={'Password'} component={Input} type={'password'} />
                </div>
                <div style={{ color: 'red', marginLeft: '15px' }}>{props.error}</div>
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