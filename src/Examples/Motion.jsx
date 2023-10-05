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
        <img
          src="/81la2a.jpg"
          alt="Meme of a guy saying No to Kermit excited animation but Yes to Kermit excited animation wrapped in prefers-reduced-motion media query"
        />
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
