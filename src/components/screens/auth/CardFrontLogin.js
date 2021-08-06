import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import validator from 'validator'
import LoginImage from '../../../assets/test.png'
import { error, startGoogleLogin } from '../../../redux/actions/auth';
import { useForm } from '../../../hooks/useForm';


export const CardFrontLogin = ({ setFlipped }) => {
    const [formValues, handleInputChange] = useForm({ emailLogin: "", passwordLogin: "" })
    const { emailLogin, passwordLogin } = formValues
    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)

    console.log(msgError)

    // FUNCION INICIAR SESION

    const handleLogin = (event) => {
        event.preventDefault()
        if (isFormValidLogin(emailLogin)) {
            console.log("Pasas")
        }
    }

    // GOOGLE LOGIN
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    // Validacion Formulario
    const isFormValidLogin = () => {
        if (!validator.isEmail(emailLogin)) {
            dispatch(error("Email Incorrect"))
            return false
        }
    }


    return (
        <div className="row g-0 pb-5">
            <div className="col-sm-6 col-md-6 rounded" style={{ height: "auto" }}>
                <img className="img-fluid img-thumbnail border-0 pb-5 pt-5 pe-2 ps-2" style={{ height: "72vh", width: "100%" }} src={LoginImage} alt="LoginIMG" />
            </div>
            <div className="col-sm-6 col-md-6 pt-5 pe-4 ps-4 border border-2 bg-dark text-white">
                <h1 className="text-center fw-bolder">LOGIN</h1>

                <p className="form-label text-center mt-4">Email address</p>
                <input type="email" value={emailLogin} autoComplete="off" name="emailLogin" onChange={handleInputChange} className="form-control rounded-pill text-center fw-bolder fs-5" placeholder="name@example.com" />

                <p className="form-label text-center mt-3">Password</p>
                <input type="password" value={passwordLogin} autoComplete="off" name="passwordLogin" onChange={handleInputChange} className="form-control rounded-pill text-center fw-bolder fs-5" placeholder="name@example.com" />

                <div className="d-grid gap-2 p-4 mt-1">
                    <button onClick={handleLogin} type="button" className="btn btn-success rounded-pill mt-2">Login</button>
                    <button onClick={handleGoogleLogin} type="button" className="btn btn-primary rounded-pill ">
                        <i className="fab fa-google me-2"></i> Login with Google
                    </button>
                    <button onClick={() => setFlipped(value => !value)} type="button" className="btn btn-primary rounded-pill mb-3">Are not Register?</button>
                </div>
            </div>
        </div>
    )
}
