import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "animate.css"
import { AppRouter } from './components/routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

export const MovieApp = () => {
    
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
