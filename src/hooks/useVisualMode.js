import { useState, useEffect } from "react";

export function useVisualMode(initial) {
  //My attempt
  //   const [mode, setMode] = useState("FIRST");
  //   return {
  //     mode,
  //   };
  //The actual answer

  const [mode, setMode] = useState(initial);

  return { mode };
}
