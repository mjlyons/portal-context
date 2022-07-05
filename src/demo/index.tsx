import { useCallback, useState } from "react";
import { PageletA } from "./pagelet-a";
import { PageletB } from "./pagelet-b";

export const Demo = () => {
  const [isPageletBVisible, setIsPageletBVisible] = useState(true);
  const togglePageletBVisibility = useCallback(() => {
    setIsPageletBVisible(!isPageletBVisible);
  }, [isPageletBVisible, setIsPageletBVisible]);
  return (
    <>
      <button onClick={togglePageletBVisibility}>
        {isPageletBVisible ? "Hide Pagelet B" : "Show Pagelet B"}
      </button>
      <PageletA />
      {isPageletBVisible && <PageletB />}
    </>
  );
};
