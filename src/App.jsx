import { useLayoutEffect } from 'react'
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";

function App() {
  useLayoutEffect(() => {
    Reveal.initialize({
      hash: true,
      plugins: [RevealMarkdown, RevealHighlight],
    });
  }, []);

  return (
    <div className="slides">
      <section>
        <h1>Roasting your <br />Non Accessible <br />Websites</h1>
      </section>
      <section data-auto-animate>
        <h2>Accessibility</h2>
      </section>
      <section data-auto-animate>
          <h1>
            <span>a</span>
            <span className="text-slate-700">11</span>
            <span>y</span>
          </h1>
          <h2 className="text-gray-800">Accessibility</h2>
        </section>
    </div>
  )
}

export default App
