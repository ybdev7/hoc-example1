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
        {book.authors.map((author) => (
          <>
            <Author author={author} />
          </>
        ))}
      </p>
    </>
  );
};

export default Book;
