import Highlight from "react-highlight";
import { IconButtonsWithText } from "../components/IconButtonsWithText";
import { IconButtons } from "../components/IconButtons";

export function Images() {
  return (
    <>
      <section data-auto-animate="">
        <h1>Images</h1>
      </section>
      <section data-auto-animate>
        <h1>Images</h1>
        <h2 className="text-gray-800">Always have an alt tag</h2>
        <Highlight className="language-html">
          {`<img src="source of element" alt="" />`}
        </Highlight>
      </section>
      <section data-auto-animate>
        <img
          src="/pakistan-cricket-fan.jpeg"
          alt="Cricket fan looking disappointed and exasperated"
        />
        <p className="fragment font-bold">Image of Guy with hands on hips</p>
      </section>
      <section>
        <img
          src="/81l3n9.jpg"
          alt="Meme of three spiderman figures pointing at each other. Each have titles of Image of, Picture of and <Img />"
        />
      </section>
      <section data-auto-animate>
        <img
          src="/pakistan-cricket-fan.jpeg"
          alt="Cricket fan looking disappointed and exasperated"
        />
        <p className="font-bold">
          <span className="line-through">Image of</span> Guy with hands on hips
        </p>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-x-4">
          <img
            src="/pakistan-cricket-fan.jpeg"
            className="self-center"
            alt="Meme containing a cricket fan looking disappointed and exasperated"
          />
          <div className="flex flex-col gap-y-16">
            <h1 className="text-6xl">
              Consider the context you are using the image in and what you want
              to communicate to the visual user
            </h1>
            <h2 className="text-4xl">
              For eg.
              <strong>
                Meme containing a cricket fan looking disappointed and
                exasperated
              </strong>
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
            <img
              src="/capitol-crawl.jpeg"
              alt="A group of handicapped people crawling up stairs"
              className="max-w-full"
            />
            <figcaption className="text-lg">
              A GROUP OF HANDICAPPED PEOPLE LED BY 8-YEAR-OLD JENNIFER KEELAN
              CRAWL UP THE STEPS OF THE U.S. CAPITOL IN WASHINGTON, TO DRAW
              SUPPORT FOR A KEY BILL PENDING IN THE HOUSE THAT WOULD EXTEND
              CIVIL RIGHTS TO DISABLED PERSONS.
            </figcaption>
          </figure>
          <div className="fragment fade-up flex h-fit pt-16">
            <Highlight className="language-html">
              {`<figure>
    <img
      src="/capitol-crawl.jpeg"
      alt="A group of handicapped people crawling up stairs"
      className="max-w-full"
    />
    <figcaption>
      A GROUP OF HANDICAPPED PEOPLE LED BY 8-YEAR-OLD JENNIFER
      KEELAN CRAWL UP THE STEPS OF THE U.S. CAPITOL IN WASHINGTON,
      TO DRAW SUPPORT FOR A KEY BILL PENDING IN THE HOUSE THAT
      WOULD EXTEND CIVIL RIGHTS TO DISABLED PERSONS.
    </figcaption>
</figure>`}
            </Highlight>
          </div>
        </div>
      </section>
      <section>
        <h1>Icons</h1>
      </section>
      <section>
        <h1 className="mb-16 text-4xl">Icon Buttons with Text</h1>
        <div className="flex flex-col">
          <IconButtonsWithText />
          <div className="fragment">
            <Highlight className="language-html">
              {`<button>
    <img src="source of icon" alt="" />
    Text
</button>`}
            </Highlight>
          </div>
        </div>
      </section>
      <section>
        <img
          src="/81l5wm.jpg"
          alt="Meme of designer pointing to a icon asking if it's a button."
        />
      </section>
      <section>
        <h1 className="mb-16 text-4xl">Icon Buttons</h1>
        <div className="flex flex-col gap-y-4">
          <IconButtons />
          <div className="fragment">
            <Highlight className="language-html">
              {`<button title="specify what the action is">
    <img src="source of icon" alt="specify what the action is" />
</button>`}
            </Highlight>
          </div>
        </div>
      </section>
    </>
  );
}
