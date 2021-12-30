import React from "react"

export const Register = () => {
    return (
        <div className="bg-secondary rounded m-2 bg-dark text-light" style={{ height: "auto" }}>

            <h1 className="fw-bolder text-center">REGISTER</h1>

            <form className="pe-4 ps-4">


                <p className="form-label text-center mt-4">Name</p>
                <input type="text" autoComplete="off" name="nameRegister"
                    className="form-control rounded-pill text-center fw-bolder" placeholder="name"
                />


                <p className="form-label text-center mt-2">Email address</p>
                <input type="email" autoComplete="off" name="emailRegister"
                    className="form-control rounded-pill text-center fw-bolder" placeholder="yourAwesomeEmail@example.com"
                />


                <p className="form-label text-center  mt-2">Password</p>
                <input type="password" autoComplete="off" name="passwordRegister"
                    className="form-control rounded-pill text-center fw-bolder"
                />


                <p className="form-label text-center mt-2">Confirm Password</p>
                <input type="password" autoComplete="off" name="password2Register"
                    className="form-control rounded-pill text-center fw-bolder"
                />


                <div className="d-grid gap-2 p-5 pt-5">
                    <button type="submit" className="btn btn-success rounded-pill">Register !!!</button>
                </div>
            </form>
        </div>
    )
}