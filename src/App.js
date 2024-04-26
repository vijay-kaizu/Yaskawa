import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import {ThemeProvider} from '@mui/material';
import {getTheme} from './ThemeConfig';

function App() {
    const [theme,] = React.useState('kiku-grey'); // Moved useState inside the functional component

    return (
        <ThemeProvider theme={getTheme(theme, false)}>
            <div className="App">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <HomePage/>
            </div>
        </ThemeProvider>
    );
}

export default App;
