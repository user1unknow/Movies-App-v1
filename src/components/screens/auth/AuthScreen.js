import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import { CardBack, CardFront, FlipCardContainer } from './styles';
import LoginImage from '../../../assets/test.png'
import RegisterImage2 from '../../../assets/registerImage.jpg'
import { startGoogleLogin } from '../../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const AuthScreen = () => {
    const [isFlipped, setFlipped] = useState(false);

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)   

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }
    console.log(auth)

    if(auth?.uid){
        return <Redirect to="/" />
    }

    const front = (
        <CardFront>
            <div className="row g-0 pb-5">
                <div className="col-sm-6 col-md-6 rounded" style={{ height: "auto" }}>
                    <img className="img-fluid img-thumbnail border-0 pb-5 pt-5 pe-2 ps-2" style={{ height: "72vh", width: "100%" }} src={LoginImage} alt="LoginIMG" />
                </div>
                <div className="col-sm-6 col-md-6 pt-5 pe-4 ps-4 border border-2 bg-dark text-white">
                    <h1 className="text-center fw-bolder">LOGIN</h1>

                    <p className="form-label text-center mt-4">Email address</p>
                    <input type="email" className="form-control rounded-pill text-center fw-bolder fs-5" placeholder="name@example.com" />

                    <p className="form-label text-center mt-3">Password</p>
                    <input type="password" className="form-control rounded-pill text-center fw-bolder fs-5" placeholder="name@example.com" />

                    <div className="d-grid gap-2 p-4 mt-1">
                        <button type="button" className="btn btn-success rounded-pill mt-2">Login</button>
                        <button onClick={handleGoogleLogin} type="button" className="btn btn-primary rounded-pill ">
                            <i className="fab fa-google me-2"></i> Login with Google
                        </button>
                        <button onClick={() => setFlipped(value => !value)} type="button" className="btn btn-primary rounded-pill mb-3">Are not Register?</button>
                    </div>
                </div>
            </div>
        </CardFront >
    );

    const back = (
        <CardBack >
            <div className="row g-0 pb-5 overflow-none">
                <div className="col-sm-6 col-md-6  rounded" style={{ height: "auto" }}>
                    <img className="img-fluid img-thumbnail border-0 pb-5 pt-5 pe-2 ps-2" style={{ height: "72vh", width: "100%" }} src={RegisterImage2} alt="RegisterIMG" />
                </div>
                <div className="col-sm-6 col-md-6 p-2 pe-4 ps-4 border border-2 bg-dark text-white">
                    <h1 className="text-center fw-bolder">REGISTER</h1>

                    <p className="form-label text-center mt-2">Name</p>
                    <input type="text" className="form-control rounded-pill text-center fw-bolder" placeholder="name" />

                    <p className="form-label text-center mt-2">Email address</p>
                    <input type="email" className="form-control rounded-pill text-center fw-bolder" placeholder="yourAwesomeEmail@example.com" />

                    <p className="form-label text-center  mt-2">Password</p>
                    <input type="password" className="form-control rounded-pill text-center fw-bolder" placeholder="********" />

                    <p className="form-label text-center mt-2">Confirm Password</p>
                    <input type="password" className="form-control rounded-pill text-center fw-bolder" placeholder="********" />

                    <div className="d-grid gap-2 p-5 pt-2">
                        <button type="button" className="btn btn-success rounded-pill mt-4">Register !!!</button>
                        <button onClick={() => setFlipped(value => !value)} type="button" className="btn btn-primary rounded-pill">Your are Register?</button>
                    </div>
                </div>
            </div>
        </CardBack>
    );

    return (
        <FlipCardContainer>
            <div style={{ position: "absolute" }} >
                <FlipCard isFlipped={isFlipped} front={front} back={back} />
            </div>
        </FlipCardContainer>
    );
}

