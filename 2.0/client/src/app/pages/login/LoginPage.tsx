import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import * as yup from 'yup'
import { Formik } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loginPage.css'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { setAuthenticatedUser } from '../../redux/slices/auth.slice'
import { Card } from 'react-bootstrap'
import { useLoginMutation } from '../../services/auth.service'
import { setShowLoader } from '../../redux/slices/general.slice'

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
})

const LoginPage = () => {
  const [login, { data, error, isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data && !error) {
      console.log('LoginPage:: data:', data)
      NotificationManager.success(`Welcome ${data.name}`, 'Authentication Success')
      localStorage.setItem('user', JSON.stringify(data))
      dispatch(setAuthenticatedUser(data))
      navigate('dashboard')
    } else if (error) {
      NotificationManager.error('Error authenticating user, please check your email and password', 'Authentication Error')
      console.log(`LoginPage:: Authentication error`, error)
    }
  }, [data, error, dispatch])

  useEffect(() => {
    dispatch(setShowLoader(isLoading))
  }, [isLoading, dispatch])

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue
    login({ email, password })
  }

  return (
    <div className="login-wrapper">
      <Formik
        validationSchema={schema}
        onSubmit={handleLogin}
        initialValues={{
          email: '',
          password: '',
          terms: true,
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <div className="login_main_div">
        <div className="login_inner_div">
            <div className="login_img">
                <img src="image/logo.png" alt="" className="img-fluid" height="50" width="45" />
            </div>
            <div className="login_form">
                <h2 className="login_heading pb-4">Account Your Login </h2>
                <form action="" noValidate onSubmit={handleSubmit}>
                    <div className="form_input_div">
                        
                        <InputGroup hasValidation>
           
                  <Form.Control
                    type="text"
                    placeholder="Your email address"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </InputGroup>
                    </div>
                    <div className="form_input_div">
                    <InputGroup hasValidation>
                
                  <Form.Control
                    type="password"
                    placeholder="Your password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                </InputGroup>
                    </div>
                    <div className="form_input_div text-center">
                        <input type="checkbox" className="checkbox_input" />
                        <label  >Remember Password</label>
                    </div>
                    <div className="form_button">
                        <Button type='submit'>Login Accounthh</Button>
                    </div>
                </form>
                <div className="forget_password_text text-center">
                    <p>If you forgot password please contact admin for the same </p>
                </div>
            </div>
        </div>
    </div>
        )}
      </Formik>
    </div>
  )
}

export default LoginPage
