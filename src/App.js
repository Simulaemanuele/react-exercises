import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter";
import { GithubUserList } from "./components/GithubUserList";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { Welcome } from "./components/Welcome";








export function App() {

    return (
        <div>
            <h1>My App</h1>
            <Routes>
                <Route path="*" element={<div>
                    <h2>Page not found</h2>
                    <Link to="/" >Return Home</Link>
                </div>} />
                <Route path="/" element={<Welcome />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/user" element={<GithubUserList />} >
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
            </Routes>
            <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/user">Github User</Link>
        </div>
    )

}

