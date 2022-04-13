export interface ISearchableEntity {
  id: string;
}

export interface IAuthor {
  id: string;
  first: string;
  last: string;
  bornAt: string;
}

export interface IBook {
  id: string;
  name: string;
  pubDate: Date;
  authors: IAuthor[];
}

export interface IListProps<T> extends Searchable {
  data: Array<T>;
}

export type Searchable = {
  searchS: string;
};
