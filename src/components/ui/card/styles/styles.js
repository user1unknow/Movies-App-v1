import styled from 'styled-components';


export const BackCard = styled.div`
        height:480px;
        width: 100%;
        background-color: red;
    
        &::-webkit-scrollbar {
            width: 6px;
            background: transparent;
        }
    
        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.842);
            border-radius: 10px;
        }
`

export const FrontCard = styled.div`
        height:480px;
        width: 100%;
`

export const PosterImg = styled.img`
        height:480px;
        width: 100%;
        background-size: cover;
`
