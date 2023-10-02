import Highlight from "react-highlight";

export function Motion() {
  return (
    <>
      <section>
        <h1>Motion</h1>
      </section>
      <section>
        <video controls>
          <source src="/Beginning.mp4" type="video/mp4" />
        </video>
      </section>
      <section>
        <video controls>
          <source src="/Resize.mp4" type="video/mp4" />
        </video>
      </section>
      <section>
        <Highlight className="language-css">
          {`@media (prefers-reduced-motion: no-preference) {
  .animation {

  }
}`}
        </Highlight>
        <Highlight className="language-js">{`const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
mediaQuery.addEventListener('change', () => {
  // Start JavaScript based animations
});`}</Highlight>
      </section>
    </>
  );
}
