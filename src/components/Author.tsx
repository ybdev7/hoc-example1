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
      {showDetailedView && <p>Born: {author.bornAt}</p>}
    </>
  );
};

export default Author;
