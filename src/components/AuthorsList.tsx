import { IAuthor, IListProps } from "../interfaces/Interfaces";
import Author from "./Author";
import { withSearchable } from "./SearchableList";

const AuthorsList = ({ data, searchS }: IListProps<IAuthor>) => {
  const lcSearchS = searchS.toLowerCase();
  function filterBy(a: IAuthor): boolean {
    return (
      lcSearchS === "" ||
      a.first.toLowerCase().includes(lcSearchS) ||
      a.last.toLowerCase().includes(lcSearchS)
    );
  }

  return (
    <>
      {data.filter(filterBy).map((author) => (
        <p>
          <Author key={author.id} author={author} showDetailedView />
        </p>
      ))}
    </>
  );
};

const AuthorsListWithSearch = withSearchable(AuthorsList);
export default AuthorsListWithSearch;
