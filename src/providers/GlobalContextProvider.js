/**
 * Not actually using context for this app right now.
 * This is just part of my boilerplate.
 */
import React, { useContext, useState } from "react";

const Context = React.createContext();

export function GlobalContextProvider(props) {
  // Sets up a global context
  // eslint-disable-next-line
  const [context, setContext] = useState({});

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export function useGlobalContext() {
  return useContext(Context);
}
