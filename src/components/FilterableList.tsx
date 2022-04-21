import React, { useState } from "react";
import {
  ExtraType,
  FilterableItem,
  IEntity,
  IGenericFilterableListProps,
} from "../interfaces/Interfaces";

export function withFilterable<P extends IGenericFilterableListProps<IEntity>>(
  WrappedComponentA: React.ComponentType<P>
) {
  const ComponentWithFilter = (props: Omit<P, keyof ExtraType>) => {
    const filterItems = props.filterBuilder.getFilterItems();
    const [filterStr, setFilterStr] = useState<FilterableItem>(filterItems[0]);

    console.log(`filter = ${filterStr.displayName}`);

    const filterTerm = props.filterBuilder.getFilterTerm(filterStr);

    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const term = filterItems.find((item) => {
        if (item.displayValue === parseInt(event.target.value)) return item;
      });
      if (term) {
        setFilterStr(term);
      }
    };

    return (
      <>
        <select value={filterStr.displayValue} onChange={handleInputChange}>
          {filterItems.map(
            (i) =>
              i && (
                <option disabled={i.displayValue === 0} value={i.displayValue}>
                  {i.displayName}
                </option>
              )
          )}
        </select>

        <WrappedComponentA {...(props as P)} filterInfo={filterTerm} />
      </>
    );
  };

  const displayName =
    WrappedComponentA.displayName || WrappedComponentA.name || "Component";
  ComponentWithFilter.displayName = `Filterable${displayName}`;

  return ComponentWithFilter;
}
