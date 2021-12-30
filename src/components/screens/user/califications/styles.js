import styled from 'styled-components'

export const DivPoster = styled.div`
    height: 440px; 
    cursor: pointer;
`

export const ImgPoster = styled.img`
    height: 440px;
    width: 100%;
`

export const DivInfoCalification = styled.div`
    height: 440px; 
    overflow: auto; 
    background: black; 
    color: white;


    &::-webkit-scrollbar {
        width: 6px;
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #ffc107;
        border-radius: 10px;
    }
`