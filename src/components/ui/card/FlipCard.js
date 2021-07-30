import React from "react";

export const FlipCard = ({ variant = "hover", frontOfCard, backOfCard }) => {
    return (
        <flip-card variant={variant}>
            <div slot="front">{frontOfCard}</div>
            <div slot="back">{backOfCard}</div>
        </flip-card>
    );
};
