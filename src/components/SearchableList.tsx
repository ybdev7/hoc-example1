import React, { useState } from "react";
import { Searchable } from "../interfaces/Interfaces";

export function withSearchable<P extends Searchable>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithSearch = (props: Omit<P, keyof Searchable>) => {
    const [searchStr, setSearchStr] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchStr(event.target.value);
    };
    return (
      <>
        <input value={searchStr} onChange={handleInputChange}></input>
        <WrappedComponent {...(props as P)} searchS={searchStr} />
      </>
    );
  };

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  ComponentWithSearch.displayName = `Searchable${displayName}`;

  return ComponentWithSearch;
}
