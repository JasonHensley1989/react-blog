import { useState } from 'react';
import React from 'react'

const Home = () => {
    const [name, setName] = useState("Jason");
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName("Jason Hensley");
        setAge(Math.round(Math.random() * 100));
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>Hello { name } is { age } years old!</p>
            <button onClick={handleClick}>Click</button>
          
        </div>
  )
}

export default Home