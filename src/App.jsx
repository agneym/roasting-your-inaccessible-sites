import { useLayoutEffect } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import { Introduction } from "./Introduction";

function App() {
  useLayoutEffect(() => {
    Reveal.initialize({
      hash: true,
      plugins: [RevealMarkdown, RevealHighlight],
    });
  }, []);

  return (
    <div className="slides">
      <Introduction />
    </div>
  );
}

export default App;
