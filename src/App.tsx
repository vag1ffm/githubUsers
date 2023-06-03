import React from 'react';
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import FavouritesPage from "./components/pages/FavouritesPage";


const App = () => {

    return (
        <>
            <>
                <Navigation />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/favourites" element={ <FavouritesPage /> } />
                </Routes>
            </>
        </>
    );
};

export default App;