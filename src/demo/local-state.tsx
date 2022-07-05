import { createContext, useContext, useState, ReactNode } from "react";

type Query = string | null;
type SetQuery = (query: Query) => void;

const LocalStateContext = createContext<null | {
  query: Query;
  setQuery: SetQuery;
}>(null);

export const LocalStateProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string | null>("portal-context");
  return (
    <LocalStateContext.Provider value={{ query, setQuery }}>
      {children}
    </LocalStateContext.Provider>
  );
};

export const { Consumer } = LocalStateContext;
export const useLocalState = () => useContext(LocalStateContext);
