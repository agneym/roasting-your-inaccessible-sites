export function Definition() {
  return (
    <>
      <section data-auto-animate="">
        <h1 className="r-fit-text">
          <span>Accessibility is</span>
          <br />
          <span className="fragment fade-up">for Everyone</span>
          <br />
          <span className="fragment fade-up">by Everyone</span>
        </h1>
      </section>
      <section data-auto-animate="">
        <h1 className="r-fit-text">
          <span>Accessibility is</span>
          <br />
          <span className="opacity-20">for Everyone</span>
          <br />
          <span>by Everyone</span>
        </h1>
      </section>
      <section>
        <h1 className="text-center">By Everyone</h1>
        <ul className="ml-0 flex list-none flex-col justify-center gap-y-4 pl-0 text-center">
          <li>Leadership</li>
          <li>Product Managers</li>
          <li>Designers</li>
          <li>Developers</li>
          <li>Testing</li>
        </ul>
      </section>
      <section>
        <figure>
          <blockquote className="w-full text-5xl shadow-none [text-wrap:balance]">
            Across the one million home pages, <strong>49,991,225</strong>{" "}
            distinct accessibility errors were detected—an average of{" "}
            <strong>50</strong> errors per page
          </blockquote>
          <figcaption>- The WebAIM Million 2023</figcaption>
        </figure>
      </section>
    </>
  );
}
