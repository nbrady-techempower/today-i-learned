import React, { useContext } from "react";
import { useGovernor } from "@techempower/react-governor";

const Context = React.createContext();

const initialState = {
  filterByTags: []
};

const contract = {
  toggleFilter(tag, getState) {
    const filterByTags = getState().filterByTags.slice();
    const idx = filterByTags.indexOf(tag);

    if (idx > -1) {
      filterByTags.splice(idx, 1);
    } else {
      filterByTags.push(tag);
    }

    return (state) => ({
      ...state,
      filterByTags
    });
  },
  clearFilters() {
    return (state) => ({
      ...state,
      filterByTags: []
    });
  }
};

export function GlobalContextProvider(props) {
  // Sets up a global context
  // eslint-disable-next-line
  const [state, actions] = useGovernor(initialState, contract);

  return (
    <Context.Provider value={[state, actions]}>
      {props.children}
    </Context.Provider>
  );
}

export function useGlobalContext() {
  return useContext(Context);
}
