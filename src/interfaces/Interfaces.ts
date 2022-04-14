import React from "react";

export interface IEntity {
  id: string;
}

export interface IAuthor extends IEntity {
  first: string;
  last: string;
  bornAt: string;
}

export interface IBook extends IEntity {
  name: string;
  pubDate: Date;
  authors: IAuthor[];
}

export interface IListProps<T extends IEntity> extends Searchable {
  data: Array<T>;
}

export type Searchable = {
  searchS: string;
};

export interface IGenericListProps<T extends IEntity> extends Searchable {
  data: Array<T>;
  getKey: (entity: T) => string;
  renderUI: (entity: T) => React.ReactNode;
  filterBy: (entity: T, searchStr: string) => boolean;
}
