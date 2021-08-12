import React, { useState } from 'react'
import FlipCard from 'flip-card-react';
import StarsRating from 'stars-rating'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export const CardMovieCalificated = ({ id, id_calification, overview, poster_path, release_date, title, user_calification, vote_average }) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [editCalification, setEditCalification] = useState(false)

    const changeRating = (newCalification) => {
        console.log(newCalification)
    }

    const handleDeleteCalification = (idMovieDB) => {
        console.log(idMovieDB)
    }

    const front = (
        <>
            <div style={{ height: "440px", cursor: "pointer" }} onClick={() => setIsFlipped(x => !x)} className="rounded me-3 ms-3">
                <img src={poster_path} alt={title} style={{ height: "440px", width: "100%" }} />
            </div>
        </>
    );

    const back = (
        <>
            <div style={{ height: "440px", overflow: "auto", }} className="p-4 me-3 ms-3 rounded bg-light rounded">
                <h1 className="text-center fw-bolder pb-2">{title}</h1>
                <p className="fs-5">{overview}</p>

                <div className="row">
                    <div className="col-12 pt-4">
                        <p className="text-center fs-5 fw-bolder">Realease Date</p>
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
                                    pathColor: "#fff",
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
                        color2={'#ffd700'} //FFA631
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

            </div>

        </>
    );
    return (
        <div>
            <div className="col pt-4 pb-2">
                <FlipCard isFlipped={isFlipped} front={front} back={back} />
            </div>
        </div>
    )
}
