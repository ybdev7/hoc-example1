import "./App.css";
import { authors, books } from "./data/data";
import SearchableGenericList, {
  AuthorListProps,
  BookListProps,
} from "./components/SearchableGenericList";

function App() {
  const bookList: BookListProps = new BookListProps(books);
  const authorList: AuthorListProps = new AuthorListProps(authors);
  return (
    <>
      <h2>Authors</h2>
      <SearchableGenericList {...authorList} />

      <h2>Books</h2>
      <SearchableGenericList {...bookList} />
    </>
  );
}

export default App;
