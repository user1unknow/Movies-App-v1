import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import validator from 'validator'
import LoginImage from '../../../assets/test.png'
import { startGoogleLogin, startLoginEmailPassword } from '../../../redux/actions/auth';
import { useForm } from '../../../hooks/useForm';
import { errorEmailLogin, errorPasswordLogin, removeErrorEmailLogin, removeErrorPasswordLogin } from '../../../redux/actions/ui';


export const CardFrontLogin = ({ setFlipped }) => {
    const [formValues, handleInputChange] = useForm({ emailLogin: "", passwordLogin: "" })
    const { emailLogin, passwordLogin } = formValues
    const dispatch = useDispatch()
    const { inputEmailLogin, inputPasswordLogin } = useSelector(state => state.ui)

    // FUNCION INICIAR SESION

    const handleLogin = (event) => {
        event.preventDefault()

        if (isFormValidLogin()) {
            dispatch(startLoginEmailPassword(emailLogin, passwordLogin))
        }
    }

    // GOOGLE LOGIN
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    // Validacion Formulario
    const isFormValidLogin = () => {

        if (emailLogin.length === 0 && passwordLogin.length === 0) {
            dispatch(errorEmailLogin("is-invalid"))
            dispatch(errorPasswordLogin("is-invalid"))
            return false
        } else if (!validator.isEmail(emailLogin) && passwordLogin.length === 0) {
            dispatch(errorPasswordLogin("is-invalid"))
            dispatch(errorEmailLogin("is-invalid"))
            return false
        } else if (emailLogin.length === 0) {
            dispatch(removeErrorPasswordLogin())
            dispatch(errorEmailLogin("is-invalid"))
            return false
        } else if (passwordLogin.length === 0) {
            dispatch(removeErrorEmailLogin())
            dispatch(errorPasswordLogin("is-invalid"))
            return false
        }

        dispatch(errorEmailLogin(""))
        dispatch(errorPasswordLogin(""))
        return true
    }

    return (
        <div className="row g-0 pb-5">
            <div className="col-sm-6 col-md-6 rounded" style={{ height: "auto" }}>
                <img className="img-fluid img-thumbnail border-0 pb-5 pt-5 pe-2 ps-2" style={{ height: "72vh", width: "100%" }} src={LoginImage} alt="LoginIMG" />
            </div>
            <form onSubmit={handleLogin} className="col-sm-6 col-md-6 pt-5 pe-4 ps-4 border border-2 ">

                <h1 className="text-center fw-bolder">LOGIN</h1>

                {/* EMAIL */}

                <p className="form-label text-center mt-4">Email address</p>
                <input type="email" value={emailLogin} autoComplete="off" name="emailLogin" onChange={handleInputChange}
                    className={`${inputEmailLogin} form-control rounded-pill text-center fw-bolder fs-5`} placeholder="name@example.com"
                />
                {
                    inputEmailLogin === "is-invalid" &&
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        <p className="text-center">INCORRECT EMAIL</p>
                    </div>
                }


                {/* PASSWORD */}
                <p className="form-label text-center mt-3">Password</p>
                <input type="password" value={passwordLogin} autoComplete="off" name="passwordLogin" onChange={handleInputChange}
                    className={`${inputPasswordLogin} form-control rounded-pill text-center fw-bolder fs-5`} placeholder="name@example.com"
                />
                {
                    inputPasswordLogin === "is-invalid" &&
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        <p className="text-center">INCORRECT PASSWORD</p>
                    </div>
                }

                <div className="d-grid gap-2 p-4 mt-1">
                    <button type="submit" className="btn btn-success rounded-pill mt-2">Login</button>
                    <button onClick={handleGoogleLogin} type="button" className="btn btn-primary rounded-pill ">
                        <i className="fab fa-google me-2"></i> Login with Google
                    </button>
                    <button onClick={() => setFlipped(value => !value)} type="button" className="btn btn-primary rounded-pill mb-3">Are not Register?</button>
                </div>
            </form>
        </div>
    )
}
