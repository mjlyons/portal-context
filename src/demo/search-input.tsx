import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useState,
} from "react";
import { useLocalState } from "./local-state";

export const SearchInput = () => {
  const localState = useLocalState();
  const [inputText, setInputText] = useState(localState?.query || "");
  const handleChanged: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      setInputText(evt.currentTarget.value);
    },
    [setInputText]
  );
  const handleKeyDown: KeyboardEventHandler = useCallback(
    (evt) => {
      if (evt.key === "Enter") {
        localState?.setQuery(inputText);
      }
    },
    [inputText, localState]
  );

  if (!localState) {
    return <div>ERROR: local state provider missing</div>;
  }

  return (
    <input
      type="search"
      value={inputText}
      onChange={handleChanged}
      onKeyDown={handleKeyDown}
    ></input>
  );
};
