export function Forward() {
  return (
    <>
      <section>
        <h1 className="text-center text-6xl">Accessiblity Testing Tools</h1>
        <ul className="ml-0 flex list-none flex-col justify-center gap-y-4 pl-0">
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
        </ul>
      </section>
      <section>
        <h1 className="r-fit-text [text-wrap:unset]">
          Accessibility Statement
        </h1>
        <a href="https://www.w3.org/WAI/planning/statements/">
          Web Accessibility Initiative (WAI) - developing an accessibility
          statement
        </a>
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
