import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    transition: "body 0.3 ease",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        transition: all 1s;
	}`;


export const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}
`