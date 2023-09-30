import { useLayoutEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
// import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import { Introduction } from "./Introduction";
import { Definition } from "./Definition";
import { Examples } from "./Examples";
import { ForEveryone } from "./ForEveryone";
import { Forward } from "./Forward";
import { Conclusion } from "./Conclusion";

function App() {
  const isLoadedRef = useRef(false);

  useLayoutEffect(() => {
    if (isLoadedRef.current) return;
    isLoadedRef.current = true;
    Reveal.initialize({
      hash: true,
      highlight: {
        highlightOnLoad: false,
      },
      plugins: [RevealMarkdown],
    });
  }, []);

  return (
    <div className="slides">
      <Introduction />
      <Definition />
      <Examples />
      <ForEveryone />
      <Forward />
      <Conclusion />
    </div>
  );
}

export default App;
