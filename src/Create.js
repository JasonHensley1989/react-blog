import React from 'react'

const Create = () => {
  return (
    <div className="create">
        <h2>Add New Blog</h2>
        <form>
          <label>Blog Title: </label>
          <input 
          type='text' 
          required 
          />
          <label>Blog Body: </label>
          <textarea
            required
          ></textarea>
          <label>Blog Author: </label>
          <select>
            <option value="Jason">Jason</option>
            <option value="J.A. Hensley">J.A. Hensley</option>
            <option value="J.H.">J.H.</option>
          </select>
          <button>Add Blog</button>
        </form>
    </div>
  )
}

export default Create