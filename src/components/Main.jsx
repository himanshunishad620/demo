import BookItem from "../UI/BookItem";
import { useGetBookByIdQuery, useGetBooksQuery } from "../services/BooksApi";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import AddPopUp from "../UI/AddPopUp";
import { toast } from "react-toastify";
export default function Main() {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [searching,setSearching]=useState(false)
  const { data: books_list, error, isLoading } = useGetBooksQuery();
  useEffect(() => {
    if (books_list) {
      setBooks([...books_list]);
    }
  }, [books_list]);

  const handleSearch = async () => {
    if (!query) return;
    setSearching(true)
    try {
      const res = await axios.get(
        `https://assignment-1-lgyj.onrender.com/book/${query}`
      );
      setBooks([res.data]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      toast("Book not found!")
    }
    setSearching(false)
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  console.log(books);
  return (
    <main className="  w-full">
      <div className="px-3 md:px-14 flex justify-between items-center top-0 sticky h-13 w-full bg-[#624DE3]">
        <div className="relative">
          <input
            onKeyDown={handleEnter}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-1 border-white bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-60"
            type="text"
            placeholder="Search by ID"
          />
          <IoSearchSharp
            onClick={handleSearch}
            className="cursor-pointer absolute top-[50%] right-3 transform translate-y-[-50%] text-2xl text-gray-400"
          />
        </div>
        <button>
          <FaRegPlusSquare
            onClick={() => setShow(true)}
            className="cursor-pointer text-2xl text-white"
          />
        </button>
      </div>
      <table className=" w-full">
        <thead className="sticky bg-[#624DE3] top-13">
          <tr className="text-white top-0 border-b-1 w-full">
            <th className="py-2 w-1/5">Book ID</th>
            <th className=" py-2 text-left w-1/5">Title</th>
            <th className="py-2 text-left w-1/5">Author</th>
            <th className="py-2 text-left w-1/5">Genre</th>
            <th className="py-2 w-1/5">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {searching || isLoading? <p>Loading....</p>:error?<p>Error Loading book</p>:books?.map((item, ind) => (
            <BookItem key={ind} item={item} />
          ))}
        </tbody>
      </table>
      {show && <AddPopUp setShow={setShow} />}
    </main>
  );
}
