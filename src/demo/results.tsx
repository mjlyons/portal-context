import { createPortal } from "react-dom";

export const ResultsTargetId = "resultsTarget";
export const ResultsTarget = () => <div id={ResultsTargetId} />;

export const ResultsRenderer = () => {
  const portalTarget = document.getElementById(ResultsTargetId);
  if (!portalTarget) {
    return <div>ERROR: could not find portal target</div>;
  }
  return createPortal(<Results />, portalTarget);
};

export const Results = () => <div>This is the Results component</div>;
