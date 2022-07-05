import { createRef, RefObject, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocalState } from "./local-state";
import { RepoStatus } from "./repo-status";

export const ResultsTargetId = "resultsTarget";
export const ResultsTarget = () => {
  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    if (!!refListener) {
      refListener(ref);
    }
    return () => {
      if (!!refListener) {
        refListener(null);
      }
    };
  }, []);
  return <div ref={ref} />;
};

export const ResultsRenderer = () => {
  const [targetRef, setTargetRef] = useState<RefObject<HTMLDivElement> | null>(
    null
  );
  useEffect(() => {
    refListener = (ref) => {
      setTargetRef(ref);
    };
    return () => {
      refListener = null;
    };
  }, []);

  if (!targetRef || !targetRef.current) {
    return <div>ERROR: could not find portal target</div>;
  }
  return createPortal(<Results />, targetRef.current);
};

export const Results = () => {
  const localState = useLocalState();
  if (!localState) {
    return <div>Error: local state provider missing</div>;
  }
  const { query } = localState;

  return (
    <div>
      This is the Results component
      <div>query: {query}</div>
      {!!query && <RepoStatus repoName={query} />}
    </div>
  );
};

let refListener: null | ((ref: RefObject<HTMLDivElement> | null) => void) =
  null;
