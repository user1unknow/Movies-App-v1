import React, { useState } from 'react'
import FlipCard from 'flip-card-react';
import StarsRating from 'stars-rating'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { startDeleting, startUpdate } from '../../../../redux/actions/movies';
import { useDispatch } from 'react-redux';
import { DivInfoCalification, DivPoster, ImgPoster } from './styles';


export const CardMovieCalificated = (props) => {
    const { id_calification, overview, poster_path, release_date, title, user_calification, vote_average } = props
    const [isFlipped, setIsFlipped] = useState(false)
    const [editCalification, setEditCalification] = useState(false)
    const [deleteCalif, SetdeleteCalif] = useState(false)
    const dispatch = useDispatch()

    const changeRating = (newCalification) => {
        const InfoMovie = {
            ...props, user_calification: newCalification
        }
        dispatch(startUpdate(id_calification, InfoMovie))
        setEditCalification(false)
    }

    const handleDeleteCalification = (idMovieDB) => {
        dispatch(startDeleting(idMovieDB))
        SetdeleteCalif(true)
    }

    const front = (
        <>
            <DivPoster onClick={() => setIsFlipped(x => !x)} className="rounded me-3 ms-3">
                <ImgPoster src={poster_path} alt={title} />
            </DivPoster>
        </>
    );

    const back = (
        <>
            <DivInfoCalification className="p-4 me-3 ms-3 rounded rounded">
                <h1 className="text-center fw-bolder pb-2 text-success">{title}</h1>
                <p className="fs-5">{overview}</p>

                <div className="row">
                    <div className="col-12 pt-4">
                        <p className="text-center fs-5 fw-bolder text-warning">Realease Date</p>
                        <p className="text-center fs-5 fw-bolder">{release_date}</p>
                    </div>
                    <div className="col-12 pb-3">
                        <div className="mx-auto pt-3" style={{ width: "45%" }}>
                            <CircularProgressbar value={Math.round(vote_average * 10)}
                                text={`${Math.round(vote_average * 10)}%`}
                                background
                                backgroundPadding={3}
                                styles={buildStyles({
                                    backgroundColor: "black",
                                    textColor: "#fff",
                                    pathColor: "#2196f3",
                                    trailColor: "transparent"
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <StarsRating
                        count={5}
                        onChange={changeRating}
                        size={38}
                        value={user_calification}
                        edit={editCalification}
                        color2={`${editCalification === false ? "#FFA631" : "#ffd700"}`}
                    />
                </div>

                <div className="d-flex justify-content-center mt-3">

                    <button type="button" onClick={() => setEditCalification((x) => !x)} className={`btn btn-block ${editCalification === false ? "btn-warning" : "btn-danger"}`} >
                        <i className="far fa-edit"></i>
                        {
                            editCalification === false ?
                                <p className="ms-2 d-inline">Edit Calification</p>
                                :
                                <p className="ms-2 d-inline">Cancel</p>
                        }
                    </button>
                </div>

                <div className="d-grid gap-2 d-flex justify-content-between mt-3">
                    <button className="btn btn-outline-primary" onClick={() => setIsFlipped(x => !x)}>
                        <i className="fas fa-undo"></i>
                    </button>

                    <button className="btn btn-outline-danger" onClick={() => handleDeleteCalification(id_calification)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>

            </DivInfoCalification>

        </>
    );
    return (
        <div>
            <div className={`col pt-4 pb-2 ${deleteCalif ? "animate__animated animate__bounceOutLeft animate__fast" : "animate__animated animate__bounceInLeft animate__delay-1s"}`} >
                <FlipCard isFlipped={isFlipped} front={front} back={back} />
            </div>
        </div>
    )
}
