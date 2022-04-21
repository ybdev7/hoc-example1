import React from "react";

export interface IEntity {
  id: string;
}

export interface IAuthor extends IEntity {
  first: string;
  last: string;
  bornAt: string;
  rating: number;
}

export interface IBook extends IEntity {
  name: string;
  pubDate: Date;
  authors: IAuthor[];
  rating: number;
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

export type Filter<V extends string | number | Date> = {
  filterName: string;

  items: FilterItem<V>[];
};

export type FilterItem<V extends string | number | Date> = {
  displayName: string;
  displayValue: V;
};

export type FilterableItem = FilterItem<number>;

export type Filterable = Filter<number>;
export type FilterTerm = {
  filterName: string;
  filterValue: FilterableItem;
  compFn: (item: any) => boolean;
};
export type ExtraType = {
  filterInfo: FilterTerm | null;
};

export interface IGenericFilterableListProps<T extends IEntity>
  extends ExtraType {
  data: Array<T>;
  getKey: (entity: T) => string;
  renderUI: (entity: T) => React.ReactNode;
  filterBy: (entity: T, filterTerm: FilterTerm) => boolean;
  filterBuilder: IFilterBuilder<T>;
}
export interface IFilterBuilder<T extends IEntity> {
  getFilterItems: () => FilterableItem[];
  getFilterTerm: (filterStr: FilterableItem) => FilterTerm;
}
