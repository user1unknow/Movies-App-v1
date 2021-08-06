import React from 'react'
import PropTypes from 'prop-types'
// FLIP CARD
import "flip-card-wc";
import { FlipCard } from "./FlipCard";
import "./styles/styles.css";
import { BackCard, FrontCard, PosterImg } from './styles/styles';

import StarsRating from 'stars-rating'

//ANIMATED PROGRESS BAR
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const FrontOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>

const BackOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>


export const Card = ({ overview, poster_path, release_date, title, vote_average }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <>
            <div className="col">
                <FlipCard variant="click" frontOfCard={
                    <FrontOfCard >
                        <FrontCard>
                            <PosterImg src={poster_path} alt={title} />
                        </FrontCard>
                    </FrontOfCard>} backOfCard={
                        <BackOfCard>
                            <BackCard className="backCard p-4 overflow-auto">
                                <h1 className="text-center fw-bolder pb-2">{title}</h1>
                                <p className="fs-5">{overview}</p>

                                <div className="row">
                                    <div className="col-6 pt-4">
                                        <p className="text-center fs-4 fw-bolder">Release Date</p>
                                        <p className="text-center fs-4 fw-bolder">{release_date}</p>
                                    </div>
                                    <div className="col-6 pb-3">
                                        <div className="mx-auto pt-3" style={{ width: "60%" }}>
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
                                        onChange={ratingChanged}
                                        size={38}
                                        color2={'#ffd700'}
                                    />
                                </div>
                            </BackCard>
                        </BackOfCard>}
                />
            </div>
        </>
    );
}


Card.propTypes = {
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
}

