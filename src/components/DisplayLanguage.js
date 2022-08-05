import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Languages = {
    en: {
        CURRENT_LANGUAGE: 'English'
    },

    it: {
        CURRENT_LANGUAGE: 'Italiano'
    }
}

export function DisplayLanguage(){
    const language = useContext(LanguageContext)

    return(
        <div>
            <h1>Current language: {Languages[language].CURRENT_LANGUAGE}</h1>
        </div>
    )
}