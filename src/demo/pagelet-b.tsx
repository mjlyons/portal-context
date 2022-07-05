import styles from "./pagelet-b.module.css";
import { ResultsTarget } from "./results";

export const PageletB = () => (
  <div className={styles.pageletBRoot}>
    This is pagelet B
    <ResultsTarget />
  </div>
);
