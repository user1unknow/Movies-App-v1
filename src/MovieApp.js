import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AppRouter } from './components/routers/AppRouter'
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme, StyledApp } from './styles';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

export const MovieApp = () => {
    const [theme, setTheme] = useState("light")
    
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <StyledApp>
                    <AppRouter />
                </StyledApp>
            </ThemeProvider>
        </Provider>
    )
}
