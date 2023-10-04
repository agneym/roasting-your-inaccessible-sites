export function Conclusion() {
  return (
    <>
      <section>
        <h1 className="r-fit-text">
          <span>Accessibility is</span>
          <br />
          <span>for Everyone</span>
          <br />
          <span>by Everyone</span>
        </h1>
      </section>
      <section>
        <h1 className="r-fit-text">Image Alt Decision Map</h1>
        <ol>
          <li>
            <a
              href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
              target="_blank"
              rel="noopener noreferrer"
            >
              An alt Decision Tree - WAI
            </a>
          </li>
          <li>
            <a
              href="https://web.dev/learn/accessibility/images/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility Images - web.dev
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h1>Courses</h1>
        <ol>
          <li>
            <a
              href="https://www.w3.org/WAI/courses/foundations-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Accessibility Foundations - W3C
            </a>
          </li>
          <li>
            <a
              href="https://web.dev/learn/accessibility/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Accessibility - web.dev
            </a>
          </li>
          <li>
            <a
              href="https://dequeuniversity.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digital Accessibility Courses & Accessibility Reference Library -
              Deque University
            </a>
          </li>
          <li>
            <a
              href="https://testingaccessibility.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testing Accessibility - by Marcy Sutton
            </a>
          </li>
          <li>
            <a
              href="https://practical-accessibility.today/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Practical Accessibility by Sara Soueidan
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/WAI/standards-guidelines/aria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Making a case for accessibility at your organization - Microsoft
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h1>Resources</h1>
        <ol>
          <li>
            <a
              href="https://www.w3.org/TR/WCAG/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG)
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/wai-aria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessible Rich Internet Applications (ARIA)
            </a>
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/2006/WD-WCAG20-20060427/appendixB.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG 2.0 Checklist
            </a>
          </li>
          <li>
            <a
              href="https://www.lflegal.com/global-law-and-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Accessibility Laws - LF Legal
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h1 className="text-center text-6xl">Accessiblity Testing Tools</h1>
        <ol className="ml-0 flex flex-col justify-center gap-y-4 pl-0">
          <ListItemLink href="https://wave.webaim.org/">Wave</ListItemLink>
          <ListItemLink href="https://www.deque.com/axe/devtools/">
            Axe DevTools
          </ListItemLink>
          <ListItemLink href="https://pa11y.org/">Pa11y</ListItemLink>
          <ListItemLink href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk">
            Lighthouse
          </ListItemLink>
          <ListItemLink href="https://webaim.org/resources/contrastchecker/">
            WebAIM Contrast Checker
          </ListItemLink>
        </ol>
      </section>
      <section>
        <figure>
          <img src="/qr-code.png" alt="https://a11y.agney.dev" />
          <figcaption>
            <a
              href="https://a11y.agney.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              a11y.agney.dev
            </a>
          </figcaption>
        </figure>
      </section>
      <section>
        <h1 className="r-fit-text">Accessibility is just the beginning.</h1>
        <h1 className="r-fit-text">Usability is the boss battle.</h1>
      </section>
    </>
  );
}

function ListItemLink({ href, children }) {
  return (
    <li className="text-center">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
}
