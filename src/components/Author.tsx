import { IAuthor } from "../interfaces/Interfaces";

interface IAuthorProps {
  author: IAuthor;
  showDetailedView?: boolean;
}

const Author = ({ author, showDetailedView = false }: IAuthorProps) => {
  return (
    <>
      <span>
        <b>{author.first + " " + author.last}</b>
      </span>{" "}
      {showDetailedView && (
        <p>
          <span>Born: {author.bornAt}</span>{" "}
          <span>{" Rating: " + author.rating}</span>
        </p>
      )}
    </>
  );
};

export default Author;
