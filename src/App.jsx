import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [Bookmarked, setBookmarked] = useState([]);
  const handleBookMark = (blog) => {
    setBookmarked([...Bookmarked, blog]);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex gap-3 m-14">
        <div className="text-center w-[70%]  left-container rounded-md border">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="border rounded-md text-center w-[30%] right-container py-4 ">
          <h1 className="text-2xl text-amber-50 p-2">Bookmark Time : 0 </h1>
          <h1 className="text-2xl text-amber-50 ">Bookmark Count :0 </h1>
          {Bookmarked.map((marked) => (
            <div className="p-2 border border-amber-100 rounded-sm m-3">
              <p>{marked.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
