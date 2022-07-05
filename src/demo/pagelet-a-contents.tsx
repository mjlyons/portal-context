import { useState } from "react";
import { useLocalState } from "./local-state";
import { Results, ResultsRenderer } from "./results";
import { SearchInput } from "./search-input";

export const PageletAContents = () => {
  const [toggle, setToggle] = useState(false);
  const localState = useLocalState();

  if (!localState) {
    return <div>ERROR: Local State provider missing</div>;
  }

  return (
    <>
      <div>This is pagelet A</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Render Toggle
      </button>
      <div>Query: {localState.query}</div>
      <SearchInput />
      {!!localState.query && <Results />}

      {/** This renders into PageletB */}
      <ResultsRenderer />
    </>
  );
};
