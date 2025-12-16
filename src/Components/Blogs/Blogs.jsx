import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  // ---
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // console.log(Blogs);

  return (
    <div>
      <h1 className="text-2xl text-blue-400 pt-4">
        Total blogs : {Blogs.length}
      </h1>
      <div className="All-blogs grid grid-cols-3">
        {Blogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
