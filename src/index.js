import React from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./Root";
import './style/index.css';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>);