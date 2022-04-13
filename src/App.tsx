import "./App.css";
import AuthorsListWithSearch from "./components/AuthorsList";
import { authors, books } from "./data/data";
import BooksListWithSearch from "./components/BooksList";
function App() {
  return (
    <>
      <h2>Authors</h2>
      <AuthorsListWithSearch data={authors} />

      <h2>Books</h2>
      <BooksListWithSearch data={books} />
    </>
  );
}

export default App;
