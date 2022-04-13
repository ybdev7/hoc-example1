import { IAuthor, IBook } from "../interfaces/Interfaces";

export const authors: Array<IAuthor> = [
  {
    id: "author1",
    first: "Lewis",
    last: "Carol",
    bornAt: "England",
  },
  {
    id: "auhtor2",
    first: "Alexandre",
    last: "Dumas",
    bornAt: "France",
  },
];

export const books: Array<IBook> = [
  {
    id: "book1",
    name: "Alice in Wonderland",
    authors: [authors[0]],
    pubDate: new Date(1865, 11, 18),
  },
  {
    id: "book2",
    name: "The Three Musketeers",
    authors: [authors[1]],
    pubDate: new Date(1845, 7, 1),
  },
];
