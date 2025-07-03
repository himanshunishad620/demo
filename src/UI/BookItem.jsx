import {  MdAutoDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../services/BooksApi";
import { useState } from "react";
import { toast } from "react-toastify";
export default function BookItem({ item }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteBook(id).unwrap(); 
      toast(`Book ${id} deleted successfully`);
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
    setLoading(false);
  };
  return (
    <tr className="text-black font-medium even:bg-white odd:bg-[#F7F6FE] border-b-1">
      <td className="text-sm md:text-md py-3 text-center">{item.id}</td>
      <td className="text-sm md:text-md py-3">{item.title}</td>
      <td className=" text-sm md:text-md py-3">{item.author}</td>
      <td className=" text-sm md:text-md py-3">{item.genre}</td>
      <td className="py-6 md:py-3 flex justify-center items-center gap-4 md:gap-5 text-sm md:text-md">
        <MdOutlineRemoveRedEye
          className="cursor-pointer text-lg md:text-2xl text-[#624DE3]"
          onClick={() => navigate(`${item.id}`)}
        />
        {loading ? (
          <MdAutoDelete
            className="cursor-pointer text-lg md:text-2xl text-black"
          />
        ) : (
          <RiDeleteBin6Line
            onClick={() => handleDelete(item.id)}
            className="cursor-pointer text-lg md:text-2xl text-red-400"
          />
        )}
      </td>
    </tr>
  );
}
