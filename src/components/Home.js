import React from 'react'

const Home = () => {
    const handleClick = () => {
        console.log(`Hello`);
    }

    const handleClickAgain = (name) => {
        console.log(`Hello ${name} great to see you again`);
    }
    return (
        <div className='home'>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => handleClickAgain("Jason")}>Click Again</button>
            {/* <h2>Create New Blog</h2> */}
        </div>
  )
}

export default Home