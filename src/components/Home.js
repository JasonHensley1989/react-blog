import { useState } from 'react';
import React from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog site', body: 'Lorem impsum....', author: "Jason", id: 1 },
        { title: 'A new day', body: 'Lorem impsum different....', author: "Jason", id: 2 },
        { title: 'Got something done ', body: 'Lorem impsum.... lastly', author: "Jason", id: 3 }
    ]);

    return (
        <div className='home'>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <p>{ blog.author}</p>
                </div>
            ))}
        </div>
  )
}

export default Home