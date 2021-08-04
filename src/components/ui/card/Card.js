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
                                <h1 className="text-center">{title}</h1>
                                <p>{overview}</p>
                                <h3 className="text-center pt-2">{release_date}</h3>

                                <StarsRating
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} />

                                <div className="mx-auto pt-3" style={{ width: "40%" }}>
                                    <CircularProgressbar value={Math.round(vote_average * 10)}
                                        text={`${Math.round(vote_average * 10)}%`}
                                        styles={buildStyles({
                                            pathColor: "turquoise",
                                            trailColor: "gold"
                                        })}
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

