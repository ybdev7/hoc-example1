import { IBook, IListProps } from "../interfaces/Interfaces";
import Book from "./Book";
import { withSearchable } from "./SearchableList";

const BooksList = ({ data, searchS }: IListProps<IBook>) => {
  const lcsearchS = searchS.toLowerCase();
  const filterBy = (b: IBook): boolean => {
    return lcsearchS === "" || b.name.toLowerCase().includes(lcsearchS);
  };
  return (
    <>
      {data.filter(filterBy).map((book, index) => (
        <Book key={index + book.name} book={book} />
      ))}
    </>
  );
};

const BooksListWithSearch = withSearchable(BooksList);
export default BooksListWithSearch;
