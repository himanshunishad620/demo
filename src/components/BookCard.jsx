import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../services/BooksApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import StarRating from "../UI/Rating";
export default function BookCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, error, isLoading } = useGetBookByIdQuery(id);
  return (
    <>
      <span className="flex px-2 justify-left items-center">
        <IoMdArrowRoundBack
          onClick={() => navigate(-1)}
          className="cursor-pointer text-2xl"
        />
        <h1 className="p-4 text-2xl font-semibold text-gray-800">
          Book Details
        </h1>
      </span>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading books</p>
      ) : (
        <div className="flex flex-col md:flex-row  w-full  ">
          <img
            className="w-full md:w-3/5 aspect-1/1"
            src="bookimg.png"
            alt="Cover Image"
          />
          <div className="flex p-4 flex-col justify-between gap-5 w-full md:w-3/4 bg-[#f2f2f2] ">
            <div>
              <h1 className="text-4xl font-semibold text-gray-800">
                {book.title}
              </h1>
              <h3 className="text-2xl font-semibold text-gray-800">
                By {book.author}
              </h3>
              <p className="text-md">
                <StarRating rating={book.rating} />
              </p>
              <i className="text-sm">
                {book.number_of_ratings} ratings, {book.reviews} reviews
              </i>
            </div>
            <p className="text-sm text-justify">
              <i>{book.summary}</i>
            </p>
            <div>
              <p className="text-sm">Genre : {book.genre}</p>
              <p className="text-sm">Publisher : {book.publisher}</p>
              <p className="text-sm">Year : {book.year}</p>
              <p className="text-sm">Pages : {book.pages}</p>
              <p className="text-sm">Language : {book.language}</p>
              <p className="text-sm">ISBN : {book.isbn}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
