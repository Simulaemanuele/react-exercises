import React, { useState } from "react";
import { DisplayLanguage } from "./components/DisplayLanguage";
import { LanguageContext } from "./components/LanguageContext";






export function App() {
    const [language, setLanguage] = useState('en')

    function handleSelectLanguage(event) {
        setLanguage(event.target.value)
    }




    return (
        <div className="mainContainer">
            <select value={language} onChange={handleSelectLanguage}>
                <option value='en'>English</option>
                <option value='it'>Italiano</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    )

}

