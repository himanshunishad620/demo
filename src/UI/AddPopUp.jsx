import React, { useState } from "react";
import { useAddBookMutation } from "../services/BooksApi";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
export default function AddPopUp({setShow}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const [isbn, setIsbn] = useState("");
  const [language, setLanguage] = useState("");
  const [number_of_ratings, setNumber_of_ratings] = useState();
  const [rating, setRating] = useState();
  const [pages, setPages] = useState();
  const [publisher, setPublisher] = useState("");
  const [reviews, setReviews] = useState();
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState();
  const [addBook, { isLoading, isSuccess, isError, error }] =
    useAddBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook({
        genre,
        id,
        title,
        author,
        isbn,
        language,
        rating,
        number_of_ratings,
        pages,
        publisher,
        reviews,
        summary,
        year,
      }).unwrap();
      toast("Book added successfully");
      setTitle("");
      setId("");
      setAuthor("");
      setGenre("");
      setPages("");
      setPublisher("");
      setLanguage("");
      setRating("");
      setNumber_of_ratings("");
      setReviews("");
      setSummary("");
      setYear("");
      setIsbn("");
      setShow(false)
    } catch (err) {
      toast("Something went wrong!")
    }
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-3 md:p-8 gap-3 w-4/5 md:w-2/5  bg-white rounded-xl"
      >
        <span className="w-full flex justify-between">
          <h2 className="text-xl">Add book</h2>
          <IoClose onClick={()=>setShow(false)} className="cursor-pointer text-2xl"/>
        </span>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="Title"
            required
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            required
            placeholder="Author"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="Genre"
            required
          />
          <input
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="Publisher"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="ID"
            required
          />
          <input
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="Language"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="text"
            placeholder="ISBN"
            required
          />
          <input
            value={number_of_ratings}
            onChange={(e) => setNumber_of_ratings(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="number"
            placeholder="Total Ratings"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="number"
            placeholder="Rating"
            required
          />
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="number"
            placeholder="Year"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <input
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="number"
            placeholder="Reviews"
            required
          />
          <input
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="border-2 border-gray-300 bg-white  focus:outline-none rounded-md h-9 pr-10 px-5 w-full md:w-1/2"
            type="number"
            placeholder="Pages"
            required
          />
        </div>
        <textarea
          rows={5}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
          required
          className="resize-none border-2 border-gray-300 bg-white focus:outline-none rounded-md h-10 md:h-30 pr-10 p-5 w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer h-10 w-full text-white font-medium rounded-md bg-[#624DE3]"
        >
          {isLoading?"Adding...":"Add"}
        </button>
      </form>
    </div>
  );
}
