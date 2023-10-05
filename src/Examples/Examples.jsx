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
      <Images />
      <Motion />
      <OTPInput />
    </>
  );
}
