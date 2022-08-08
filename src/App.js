import React from "react";
import {Route, Routes} from "react-router-dom"
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Welcome } from "./components/Welcome";








export function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/user/:username" element={<ShowGithubUser />}/>
        </Routes>
    )

}

