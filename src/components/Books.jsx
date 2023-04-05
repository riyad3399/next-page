import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const booksData = useLoaderData();
  const { books } = booksData;
  console.log(books);

  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
            <img className="object-cover w-full h-56 md:h-80" src={book.image} alt="book cover" />
            <div className="bg-black bg-opacity-75 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200">
              <p>{book.title}</p> <br />
              <p>{book.subtitle}</p> <br />
              <p> Price: {book.price }</p>
            </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
