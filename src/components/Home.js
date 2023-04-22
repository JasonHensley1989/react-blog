import { useState, useEffect } from 'react';
import React from 'react'
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new blog site', body: 'Lorem impsum....', author: "Jason", id: 1 },
        { title: 'A new day', body: 'Lorem impsum different....', author: "Fred", id: 2 },
        { title: 'Got something done ', body: 'Lorem impsum.... lastly', author: "Jason", id: 3 }
    ]);
    
    const [name, setName] = useState("Jason");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className='home'>
           <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           <button onClick={() => setName("Jason H.")}>Change Name</button>
           <p>{ name }</p>
        </div>
  )
}

export default Home