import React from "react";
import { FilteredList } from "./components/FilteredList";


const nameList = [
    { name: 'Gianni', id: 1, age: 22 },
    { name: 'Paolo', id: 2, age: 28 },
    { name: 'Carlo', id: 3, age: 18 },
    { name: 'Maria', id: 4, age: 15 },
    { name: 'Gianandrea', id: 5, age: 32 },
    { name: 'Marco', id: 6, age: 27 },
    { name: 'Giorgio', id: 7, age: 17 },
  ];




export function App() {
    
    return (
        <div className="mainContainer">
            <FilteredList list={nameList}/>
        </div>
    )

}

