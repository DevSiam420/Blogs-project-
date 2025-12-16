import React from "react";

const Blog = ({ blog }) => {
  console.log(blog);

  return (
    <div className="text-left p-4 border m-5 rounded-2xl">
      <h2 className="text-2xl text-blue-600">Id : {blog.id}</h2>
      <h3 className="text-gray-500">{blog.title}</h3>
      {/* cover Img */}
      <img src={blog.coverImg} className="w-38 rounded-2xl mt-2" alt="" />
      <p className="text-gray-400 mt-1">{blog.postedDate}</p>
      <p>{blog.hashtags}</p>
      <button className="mt-1 btn btn-sm bg-blue-400 text-black font-bold">
        {" "}
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
