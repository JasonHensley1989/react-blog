import { useState } from 'react';
import React from 'react'
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog site', body: 'Lorem impsum....', author: "Jason", id: 1 },
        { title: 'A new day', body: 'Lorem impsum different....', author: "Fred", id: 2 },
        { title: 'Got something done ', body: 'Lorem impsum.... lastly', author: "Jason", id: 3 }
    ]);

    return (
        <div className='home'>
           <Bloglist blogs={blogs} title="All Blogs"/>
           <Bloglist blogs={blogs.filter((blog) => blog.author === "Jason")} title="Jasons Blogs"/>
        </div>
  )
}

export default Home