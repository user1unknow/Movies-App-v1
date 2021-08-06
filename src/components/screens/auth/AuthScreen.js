import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import { CardBack, CardFront, FlipCardContainer } from './styles';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CardFrontLogin } from './CardFrontLogin';
import { CardBackRegister } from './CardBackRegister';

export const AuthScreen = () => {

    const [isFlipped, setFlipped] = useState(false);
    const auth = useSelector(state => state.auth)

    // VALIDAR INICIO DE SESION PARA UNA REDIRECCION
    if (auth?.uid) {
        return <Redirect to="/" />
    }

    const front = (
        <CardFront>
            <CardFrontLogin setFlipped={setFlipped} />
        </CardFront >
    );

    const back = (
        <CardBack >
            <CardBackRegister setFlipped={setFlipped} />
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

