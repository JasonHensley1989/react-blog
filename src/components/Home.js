import React from 'react'

const Home = () => {
    let name = "Jason";

    const handleClick = () => {
        name = 'Luigi';
        console.log(name);
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click</button>
          
        </div>
  )
}

export default Home