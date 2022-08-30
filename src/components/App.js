import React, { useEffect, useState } from 'react';

const baseURL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [message, setImage] = useState(null)

    useEffect(() => {
        fetch(baseURL)
            .then (resp => resp.json())
            .then (data => setImage(data.message))
    }, [])
    if(!message) {
        return <p>"Loading..."</p> // conditional rendering
    }
    return (
        <div>
        <p>Dog Ceo API</p>
        <img src={message} alt="A Random Dog" />
        </div>
    );
}

export default App; 
