import { useState } from 'react';
import React from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog site', body: 'Lorem impsum....', author: "Jason", id: 1 },
        { title: 'My new blog site', body: 'Lorem impsum different....', author: "Jason", id: 2 },
        { title: 'My new blog site', body: 'Lorem impsum.... lastly', author: "Jason", id: 3 }
    ])
    return (
        <div className='home'>
            <h2>Homepage</h2>
        </div>
  )
}

export default Home