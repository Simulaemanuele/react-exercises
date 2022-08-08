import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Welcome } from "./components/Welcome";








export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/user" element={<ShowGithubUser />} />
                <Route path="/user/:username" element={<ShowGithubUser />} />
            </Routes>
            <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/user">Github User</Link>
        </div>
    )

}

