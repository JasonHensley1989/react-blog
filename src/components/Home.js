import { useState, useEffect } from 'react';
import React from 'react'
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
               return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false)
            });
    }, []);


    return (
        <div className='home'>
            {isPending && <div>Loading...</div>}
           {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
           {/* <button onClick={() => setName("Jason H.")}>Change Name</button> */}
        </div>
  )
}

export default Home