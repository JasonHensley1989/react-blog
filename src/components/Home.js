import { useState, useEffect } from 'react';
import React from 'react'
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error("Could not fetch resource data.")
                }
               return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    }, []);


    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
            {/* <button onClick={() => setName("Jason H.")}>Change Name</button> */}
        </div>
  )
}

export default Home