export function Examples() {
  return (
    <>
      <section>
        <h1 className="underline decoration-gray-500 decoration-dashed">
          OTP Input
        </h1>
      </section>
      <section>
        <img
          src="./otp-input.png"
          alt="screenshot of an OTP input"
          className="shadow-lg"
        />
      </section>
      <section>
        <div className="grid grid-cols-2">
          <img
            src="./otp-input.png"
            alt="screenshot of an OTP input"
            className="w-full shadow-lg"
          />
          <ul className="flex flex-col gap-y-4">
            <li className="fragment">
              User should be able to paste into the item
            </li>
            <li className="fragment">
              User should be able to use arrow keys to navigate between the
              inputs
            </li>
            <li className="fragment">
              User should be able to use backspace/delete to delete the input
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2">
          <img
            src="./otp-input.png"
            alt="screenshot of an OTP input"
            className="w-full shadow-lg"
          />
          <ul className="flex flex-col gap-y-4">
            <li className="fragment">
              User should be able to use tab to navigate into and out of the
              inputs
            </li>
            <li className="fragment">
              Hide visual design and provide a single input for screenreader
              users.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <pre>
          <code className="language-html" data-line-numbers="3,4|5">
            &lt;img maxlength=&quot;1&quot; type=&quot;number&quot;
            inputmode=&quot;numeric&quot; pattern=&quot;[0-9]*&quot;
            autocomplete=&quot;one-time-code&quot; /&gt;
            <p>Content</p>
          </code>
        </pre>
      </section>
      <section data-auto-animate="">
        <h1>Images</h1>
      </section>
      <section data-auto-animate>
        <h1>Images</h1>
        <h2 className="text-gray-800">Always have an alt tag</h2>
        <pre>
          <code data-trim>
            <img src="source of element" alt="" />
          </code>
        </pre>
      </section>
      <section>
        <img
          src="/pakistan-cricket-fan.jpeg"
          alt="Cricket fan looking disappointed and exasperated"
        />
        <p>
          <strong>Guy with hands on hips</strong>
        </p>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-x-4">
          <img
            src="/pakistan-cricket-fan.jpeg"
            alt="Cricket fan looking disappointed and exasperated"
            className="self-center"
          />
          <div className="flex flex-col gap-y-16">
            <h1 className="text-6xl">
              Consider the context you are using the image in and what you want
              to communicate to the visual user
            </h1>
            <h2 className="text-4xl">
              For eg.
              <strong>Cricket fan looking disappointed and exasperated</strong>
            </h2>
          </div>
        </div>
      </section>
      <section>
        <img
          src="/capitol-crawl.jpeg"
          alt="A GROUP OF HANDICAPPED PEOPLE LED BY 8-YEAR-OLD JENNIFER KEELAN CRAWL UP THE STEPS OF THE U.S. CAPITOL IN WASHINGTON, TO DRAW SUPPORT FOR A KEY BILL PENDING IN THE HOUSE THAT WOULD EXTEND CIVIL RIGHTS TO DISABLED PERSONS."
          className="r-stretch max-w-full"
        />
      </section>
      <section>
        <div className="grid grid-cols-2">
          <figure className="h-2/4">
            <img src="/capitol-crawl.jpeg" alt="" className="max-w-full" />
            <figcaption className="text-lg">
              A GROUP OF HANDICAPPED PEOPLE LED BY 8-YEAR-OLD JENNIFER KEELAN
              CRAWL UP THE STEPS OF THE U.S. CAPITOL IN WASHINGTON, TO DRAW
              SUPPORT FOR A KEY BILL PENDING IN THE HOUSE THAT WOULD EXTEND
              CIVIL RIGHTS TO DISABLED PERSONS.
            </figcaption>
          </figure>
          <div className="flex items-center">
            <pre>
              <code className="language-html">
                <figure>
                  <img
                    src="/capitol-crawl.jpeg"
                    alt=""
                    className="max-w-full"
                  />
                  <figcaption>
                    A GROUP OF HANDICAPPED PEOPLE LED BY 8-YEAR-OLD JENNIFER
                    KEELAN CRAWL UP THE STEPS OF THE U.S. CAPITOL IN WASHINGTON,
                    TO DRAW SUPPORT FOR A KEY BILL PENDING IN THE HOUSE THAT
                    WOULD EXTEND CIVIL RIGHTS TO DISABLED PERSONS.
                  </figcaption>
                </figure>
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
