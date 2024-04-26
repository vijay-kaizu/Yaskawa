import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import './App.css';
import HomePage from './HomePage';
import {ThemeProvider} from '@mui/material';
import {getTheme} from './ThemeConfig';
import LoginPage from "./Login";

function App() {
    const [theme,] = React.useState('kiku-grey'); // Moved useState inside the functional component

    return (
        <ThemeProvider theme={getTheme(theme, false)}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<LoginPage/>}
                        />
                        <Route
                            path="/home"
                            element={<HomePage/>}
                        />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
