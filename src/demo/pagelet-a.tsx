import { useState } from "react";
import styles from "./pagelet-a.module.css";
import { ResultsRenderer } from "./results";

export const PageletA = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.pageletARoot}>
      This is pagelet A
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Render Toggle
      </button>
      <ResultsRenderer />
    </div>
  );
};
