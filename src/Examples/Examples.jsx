import { OTPInput } from "./OTPInput";
import { Images } from "./Images";
import { Motion } from "./Motion";

export function Examples() {
  return (
    <>
      <section>
        <h1 className="r-fit-text">
          What&apos;s <br /> Inaccessible?
        </h1>
      </section>
      <section>
        <img src="/dd0.jpg" alt="Meme of awkward monkey look" />
      </section>
      <section>
        <img
          src="/81l7xy.jpg"
          alt="Meme of a guy telling kids Inaccessible in bold letters. Teacher explains that those kids would be very upset if they could read."
        />
      </section>
      <Images />
      <Motion />
      <OTPInput />
    </>
  );
}
