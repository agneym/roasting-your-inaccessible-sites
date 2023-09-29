export function Introduction() {
  return (
    <>
      <section>
        <img
          src="/roast.png"
          alt="Image of Marshmallows being roasted"
          className="w-60"
        />
        <h1>
          Roasting your <br />
          Non Accessible <br />
          Websites
        </h1>
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
      <section data-auto-animate="">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-16">
          <div>
            <h1 data-id="a11y">a11y</h1>
            <h2 className="text-4xl text-gray-800">Accessibility</h2>
          </div>
          <div>
            <h1>i18n</h1>
            <h2 className="text-4xl text-gray-800">Internationalization</h2>
          </div>
          <div>
            <h1>i14y</h1>
            <h2 className="text-4xl text-gray-800">Interoperability</h2>
          </div>
          <div>
            <h1>k8s</h1>
            <h2 className="text-4xl text-gray-800">Kubernetes</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 grid-rows-3 gap-x-16 gap-y-16">
          <div className="col-start-1">
            <h2 className="text-gray-700">a11y</h2>
          </div>
          <div className="col-start-3">
            <h2 className="text-gray-700">i18n</h2>
          </div>
          <h1 className="col-span-3 col-start-1">Numeronym</h1>
          <div>
            <h2 className="text-gray-700">i14y</h2>
          </div>
          <div className="col-start-3">
            <h2 className="text-gray-700">k8s</h2>
          </div>
        </div>
      </section>
      <section>
        <img
          src="/avatar-400x400.jpg"
          alt=""
          className="h-60 w-60 rounded-full"
        />
        <h1 className="fragment fade-up mb-1">
          a<span className="text-slate-700">3</span>y
        </h1>
        <h2>Agney</h2>
        <div className="flex justify-center gap-x-8">
          <a
            href="https://twitter.com/agneymenon"
            target="_blank"
            className="text-xl text-gray-800 underline"
            rel="noreferrer noopener"
          >
            @agneymenon
          </a>
          <a
            href="https://agney.dev"
            target="_blank"
            className="text-xl text-gray-800 underline"
            rel="noreferrer noopener"
          >
            agney.dev
          </a>
        </div>
      </section>
      <section>
        <a
          className="mb-0"
          href="https://circle.so?utm_source=agney_react_india_presentation"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/circle-logo.svg"
            alt="circle.so logo"
            className="mb-0 w-40"
          />
        </a>
        <img
          src="/circle-use.png"
          alt="screenshot of a demo community website provided by circle.so"
        />
      </section>
    </>
  );
}
