import { useLayoutEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import { Introduction } from "./Introduction";
import { Definition } from "./Definition";
import { Examples } from "./Examples";

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
      plugins: [RevealMarkdown, RevealHighlight],
    }).then((r) => {
      console.log(r);
      const highlight = Reveal.getPlugin("highlight");
      Array.from(document.querySelectorAll("pre code")).forEach((block) => {
        if (block.classList.contains("hljs")) return;
        console.log({ block });
        highlight.highlightBlock(block);
      });
    });
  }, []);

  return (
    <div className="slides">
      <Introduction />
      <Definition />
      <Examples />
    </div>
  );
}

export default App;
