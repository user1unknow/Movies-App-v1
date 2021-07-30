import React from 'react'
import "flip-card-wc";
import { FlipCard } from "./FlipCard";
import "./styles/styles.css";
import { BackCard, FrontCard, PosterImg } from './styles/styles';


const FrontOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>

const BackOfCard = ({ children }) =>
    <div>
        <>{children}</>
    </div>


export const Card = ({ overview, poster_path, release_date, title, vote_average }) => {
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
                                <p>{release_date}</p>
                                <p>{vote_average}</p>
                            </BackCard>
                        </BackOfCard>}
                />
            </div>
        </>
    );
}
