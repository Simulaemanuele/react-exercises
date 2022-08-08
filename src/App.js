import React from "react";
import {Route, Routes} from "react-router-dom"
import { Welcome } from "./components/Welcome";








export function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
        </Routes>
    )

}

