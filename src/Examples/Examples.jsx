import { OTPInput } from "./OTPInput";
import { Images } from "./Images";

export function Examples() {
  return (
    <>
      <OTPInput />
      <Images />
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
