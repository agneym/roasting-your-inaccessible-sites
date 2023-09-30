import Highlight from "react-highlight";
import { OTPScreen } from "../components/OTPScreen";

export function OTPInput() {
  return (
    <>
      <section>
        <h1 className="underline decoration-gray-500 decoration-dashed">
          OTP Input
        </h1>
      </section>
      <section data-disable-layout>
        <OTPScreen />
      </section>
      <section>
        <ul className="flex flex-col gap-y-4">
          <li>User should be able to paste into the item</li>
          <li className="fragment">
            User should be able to use arrow keys to navigate between the inputs
          </li>
          <li className="fragment">
            User should be able to use backspace/delete to delete the input
          </li>
          <li className="fragment">
            User should be able to use tab to navigate into and out of the
            inputs
          </li>
          <li className="fragment">
            Hide visual design and provide a single input for screenreader
            users.
          </li>
        </ul>
      </section>
      <section data-auto-animate>
        <Highlight className="language-html">
          {`<input
    type="number"
    inputMode="numeric"
    pattern="[0-9]*"
    maxLength="4"
/>`}
        </Highlight>
      </section>
      <section data-auto-animate>
        <h1 className="text-4xl text-red-400">Bonus!</h1>
        <Highlight className="language-html">
          {`<input
    type="number"
    inputMode="numeric"
    pattern="[0-9]*"
    maxLength="4"
    autoComplete="one-time-code"
/>`}
        </Highlight>
      </section>
    </>
  );
}
