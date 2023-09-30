export function Forward() {
  return (
    <>
      <section>
        <h1>What can a business do right now?</h1>
      </section>
      <section>
        <h1>
          <span>Accessibility is a </span>
          <br />
          Reverse Captcha
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-x-16">
          <ul className="flex flex-col gap-y-8">
            <li>Captchas are proof that the user is human.</li>
            <li>
              Accessibility is proof that the Website is build for humans.
            </li>
          </ul>
          <img
            src="/robot-staring-screen.png"
            alt="Comic of frustrated robot staring at the screen because they are not able to solve captcha"
          />
        </div>
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
