import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";
// --- Bookmark function -
function App() {
  const [Bookmarked, setBookmarked] = useState([]);
  const handleBookMark = (blog) => {
    setBookmarked([...Bookmarked, blog]);
  };
  // --- Handle Mark as read Button ----
  const [CountReadingTime, setCountReadingTime] = useState(0);
  const HandleMarkButton = (time, Id) => {
    DeleteBookMark(Id);
    const newTime = CountReadingTime + time;
    setCountReadingTime(newTime);
  };

  // -- Delete bookmark --

  const DeleteBookMark = (id) => {
    const remainingBookMark = Bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex gap-3 m-14">
        <div className="text-center w-[70%]  left-container rounded-md border">
          <Blogs
            handleBookMark={handleBookMark}
            HandleMarkButton={HandleMarkButton}
          ></Blogs>
        </div>
        <div className="border rounded-md text-center w-[30%] right-container py-4 ">
          <h1 className="text-2xl text-amber-50 p-2">
            Reading Time : {CountReadingTime}{" "}
          </h1>
          <h1 className="text-2xl text-amber-50 ">
            Bookmark Count : {Bookmarked.length}{" "}
          </h1>
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
