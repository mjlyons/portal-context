import { QueryClient, QueryClientProvider } from "react-query";
import { LocalStateProvider } from "./local-state";
import { PageletAContents } from "./pagelet-a-contents";
import styles from "./pagelet-a.module.css";

const queryClient = new QueryClient();

export const PageletA = () => {
  return (
    <LocalStateProvider>
      <QueryClientProvider client={queryClient}>
        <div className={styles.pageletARoot}>
          <PageletAContents />
        </div>
      </QueryClientProvider>
    </LocalStateProvider>
  );
};
