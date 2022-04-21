import { IBook } from "../interfaces/Interfaces";
import Author from "./Author";

interface IBookProps {
  book: IBook;
}

const Book = ({ book }: IBookProps) => {
  return (
    <>
      <p>
        <span>
          <b>{book.name}</b>
        </span>
        <span>{" by "}</span>
        {book.authors.map((author, index) => (
          <>
            <Author
              key={`book-${book.id}-author-${author.id}`}
              author={author}
            />
            {index + 1 < book.authors.length ? <span>{", "}</span> : null}
          </>
        ))}

        <span>{" Rating: " + book.rating}</span>
      </p>
    </>
  );
};

export default Book;
