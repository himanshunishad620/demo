import { Route, Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import BookCard from "./components/BookCard";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className=" overflow-auto h-screen scrollbar-hidden w-full md:w-3/5 m-auto ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<BookCard />} />
        </Routes>
      <ToastContainer/>
    </div>
  );
}
