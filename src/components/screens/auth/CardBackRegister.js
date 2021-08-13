import React from 'react'
import { useForm } from '../../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeErrorRegister, setErroRegister } from '../../../redux/actions/ui'
import { registerUser } from '../../../redux/actions/auth'

export const CardBackRegister = ({ setFlipped }) => {
    const dispatch = useDispatch()
    const [formValues, handleInputChange] = useForm({ nameRegister: "", emailRegister: "", passwordRegister: "", password2Register: "" })
    const { nameRegister, emailRegister, passwordRegister, password2Register } = formValues
    const { msgError } = useSelector(state => state.ui)


    const handleRegister = (event) => {
        event.preventDefault()

        if (isFormValid()) {
            dispatch(registerUser(nameRegister, emailRegister, passwordRegister))
        }
    }

    const isFormValid = () => {
        if (nameRegister.trim().length === 0) {
            dispatch(setErroRegister("Name is requiered"))
            return false
        } else if (!validator.isEmail(emailRegister)) {
            dispatch(setErroRegister("email is not valid"))
            return false
        } else if (passwordRegister !== password2Register || passwordRegister.length < 5) {
            dispatch(setErroRegister("Paswords incorrects"))
            return false
        }

        dispatch(removeErrorRegister())
        return true
    }


    return (
        <div className="row g-0 pb-5 mt-4">
            <div className="col-sm-6 col-md-6  rounded" style={{ height: "auto" }}>
                <img className="img-fluid img-thumbnail border-0 pb-5 pt-5 pe-2 ps-2" style={{ height: "84vh", width: "100%" }} src="https://img.freepik.com/vector-gratis/registro-linea-e-inscribase-hombre-sentado-cerca-telefono-inteligente_268404-95.jpg?size=626&ext=jpg" alt="RegisterIMG" />
            </div>
            <form onSubmit={handleRegister} className="col-sm-6 col-md-6 p-2 pe-4 ps-4 border border-2 bg-dark text-light">

                {
                    msgError &&
                    <div class="alert alert-danger" role="alert">
                        <p className="text-center m-1"><strong> {msgError.toUpperCase()} </strong></p>
                    </div>
                }
                <h1 className="text-center fw-bolder">REGISTER</h1>

                <p className="form-label text-center mt-2">Name</p>
                <input type="text" value={nameRegister} autoComplete="off" name="nameRegister" onChange={handleInputChange}
                    className={`form-control rounded-pill text-center fw-bolder`} placeholder="name"
                />


                <p className="form-label text-center mt-2">Email address</p>
                <input type="email" value={emailRegister} autoComplete="off" name="emailRegister" onChange={handleInputChange}
                    className={`form-control rounded-pill text-center fw-bolder`} placeholder="yourAwesomeEmail@example.com"
                />


                <p className="form-label text-center  mt-2">Password</p>
                <input type="password" value={passwordRegister} autoComplete="off" name="passwordRegister" onChange={handleInputChange}
                    className={`form-control rounded-pill text-center fw-bolder`} placeholder="********"
                />


                <p className="form-label text-center mt-2">Confirm Password</p>
                <input type="password" value={password2Register} autoComplete="off" name="password2Register" onChange={handleInputChange}
                    className={`form-control rounded-pill text-center fw-bolder`} placeholder="********"
                />


                <div className="d-grid gap-2 p-5 pt-5">
                    <button type="submit" className="btn btn-success rounded-pill mt-2">Register !!!</button>
                    <button onClick={() => setFlipped(value => !value)} type="button" className="btn btn-primary rounded-pill">Your are Register?</button>
                </div>
            </form>
        </div >
    )
}
