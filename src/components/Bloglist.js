import React from 'react';

const Bloglist = ({ blogs, title }) => {

  // destructured version used instead of just bringing in props, simplifies the code.
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
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

export default Bloglist