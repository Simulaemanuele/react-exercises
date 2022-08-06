import { useMemo } from "react"

export function FilteredList({ list }) {
    const filteredListArray = useMemo(() => {
        return list.filter((person) => person.age > 18)
    }, [list])

    return (
        <div>
            <h1 style={{marginBottom: '20px'}}>A Person List</h1>
            <div style={{ width: '12%' }}>
                {filteredListArray.map((person) => (
                    <div key={person.name + person.id}
                        style={{
                            fontWeight: 'bolder',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                        <span >Name: {person.name}</span>
                        <span>Age: {person.age}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}