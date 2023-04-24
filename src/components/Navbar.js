import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className='title'>The Daily Blogger</h1>
        <div className="links">
            <Link to="/">Home</Link>
            {/* inline styling just for practice */}
            <Link to="/create" style={{
              color: "#fffdf7",
              backgroundColor: "#a8b7c8",
              borderRadius: "8px"
            }}>New Blog</Link>
        </div>
      
    </nav>
  )
}

export default Navbar