import { useState } from "react";

export default function useVisualMode(initial) {
  //My attempt-------------------
  //   const [mode, setMode] = useState("FIRST");
  //   return {
  //     mode,
  //   };
  //The actual answer

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      history.pop();
      setMode(initial);
    }
    setMode(newMode);
    let newHistory = [...history, newMode];

    setHistory(newHistory);
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    history.pop();
    setMode(history[history.length - 1]);
  };

  return { mode, transition, back };
}
