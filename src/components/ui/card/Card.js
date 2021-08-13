import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { newMovieCalification } from '../../../redux/actions/movies';
import { BackCard, FrontCard, PosterImg } from './styles/styles';
import { FlipCard } from "./FlipCard";
import StarsRating from 'stars-rating'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "flip-card-wc";
import "./styles/styles.css";
import "react-circular-progressbar/dist/styles.css";

const FrontOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>

const BackOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>


export const Card = (props) => {

    const dispatch = useDispatch()
    const mov = useSelector(state => state.movies.userCalifications)
    const { uid } = useSelector(state => state.auth)

    const ids_movies_calificated = mov.map(({ id }) => {
        return id
    })

    const { id: idMovie, overview, poster_path, release_date, title, vote_average } = props
    const verification = ids_movies_calificated.includes(idMovie)

    const saveRatingMovie = (calification) => {
        dispatch(newMovieCalification(calification, props))
    }

    return (
        <>
            <div className="col animate__animated animate__zoomIn">
                <FlipCard variant="click" frontOfCard={
                    <FrontOfCard >
                        <FrontCard>
                            <PosterImg src={poster_path} alt={title} />
                        </FrontCard>
                    </FrontOfCard>
                } backOfCard={
                    <BackOfCard>
                        <BackCard className="p-4 overflow-auto">
                            <h1 className="text-center fw-bolder pb-2 text-success">{title}</h1>
                            <p className="fs-5">{overview}</p>

                            <div className="row">
                                <div className="col-6 pt-4">
                                    <p className="text-center fs-4 fw-bolder text-warning">Realease Date</p>
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
                                                pathColor: "#2196f3",
                                                trailColor: "transparent"
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                {

                                    uid && verification === false ?
                                        <StarsRating
                                            count={5}
                                            onChange={saveRatingMovie}
                                            size={38}
                                            color2={'#ffd700'}
                                        />
                                        :
                                        !uid ?
                                            <h1 className="text-center bg-danger rounded-pill fw-bolder fs-4 p-2 mt-2">For vote, you need to be registered</h1>
                                            :
                                            <h1 className="text-center bg-success rounded-pill font-weight-bold fs-4 p-2 mt-2">You already voted for this movie</h1>
                                }
                            </div>
                        </BackCard>
                    </BackOfCard>
                }
                />
            </div>
        </>
    );
}


Card.propTypes = {
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
}

