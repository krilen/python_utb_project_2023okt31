import {useState, useEffect} from 'react'

function Fruits() {
    const [fruits, setFruits] = useState([]);
 

    useEffect(() => {
        fetch('/api/fruits', {method: "GET"})
        .then(response => response.json())
        .then(fruits => setFruits(fruits))
        .catch((error) => { 
            console.error("An ERROR occured: ", error)
        });
    }, []);

    const updateFruit = () => {

        fetch('/api/fruits', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify("hello")
        })
        .then(response => {
            console.log(response.status)
            return response.json()

        })
        .then(message => {
            console.log(message)
        })
        .catch((error) => { 
            console.error("An ERROR occured: ", error)
        });
    };

    updateFruit()

    return (
        <div>
        {JSON.stringify(fruits)}
        </div>
    )
}

export default Fruits