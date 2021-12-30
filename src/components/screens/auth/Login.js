import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "../../../hooks/useForm"
import { startLoginEmailPassword, startGoogleLogin } from "../../../redux/actions/auth"

export const Login = () => {

    const dispatch = useDispatch()

    const [{ email, password }, handleInputChange] = useForm({ email: "", password: "" })

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleSignIn = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div className="d-flex flex-column rounded bg-light mt-5 border-dark rounded border border-3 " style={{ height: "auto" }}>
            <h1 className="fw-bolder text-center m-4">Login</h1>

            <form onSubmit={handleLogin} className="me-5 ms-5">

                <p className="form-label text-center mt-4 fw-bolder">Email address</p>
                <input type="email" autoComplete="off" name="email" value={email} onChange={handleInputChange}
                    className="form-control rounded-pill text-center fw-bolder fs-5" style={{ backgroundColor: "#59D696" }}
                />

                <p className="form-label text-center mt-4 fw-bolder">Password</p>
                <input type="password" autoComplete="off" name="password" value={password} onChange={handleInputChange}
                    className="form-control rounded-pill text-center fw-bolder fs-5" style={{ backgroundColor: "#59D696" }}
                />

                <div className="d-grid gap-2 p-4 mt-1">
                    <button type="submit" className="btn text-light fw-bolder rounded-pill mt-2" style={{ backgroundColor: "#4F44C4" }}>Login</button>
                    <button type="button" onClick={handleGoogleSignIn} className="btn fw-bolder btn-primary rounded-pill bg-primary">
                        <i className="fab fa-google me-2"></i> Login with Google
                    </button>
                </div>

            </form>
        </div>
    )
}