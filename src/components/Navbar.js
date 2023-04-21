import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Daily Blogger</h1>
        <div className="links">
            <a href="/">Home</a>
            {/* inline styling just for practice */}
            <a href="/create" style={{
              color: "#fffdf7",
              backgroundColor: "#a8b7c8",
              borderRadius: "8px"
            }}>New Blog</a>
        </div>
      
    </nav>
  )
}

export default Navbar