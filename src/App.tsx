import "./App.css";
import { authors, books } from "./data/data";
import SearchableGenericList, {
  AuthorListProps,
  BookListProps,
} from "./components/SearchableGenericList";
import FilterableGenericList, {
  AuthorFilterableListProps,
  BookFilterableListProps,
} from "./components/FilterableGenericList";

function App() {
  const bookList: BookListProps = new BookListProps(books);
  const authorList: AuthorListProps = new AuthorListProps(authors);
  return (
    <>
      <h3>Filtered Books</h3>
      <FilterableGenericList {...new BookFilterableListProps(books)} />

      <h3>Filter</h3>
      <FilterableGenericList {...new AuthorFilterableListProps(authors)} />

      <h2>Authors</h2>
      <SearchableGenericList {...authorList} />

      <h2>Books</h2>
      <SearchableGenericList {...bookList} />
    </>
  );
}

export default App;
