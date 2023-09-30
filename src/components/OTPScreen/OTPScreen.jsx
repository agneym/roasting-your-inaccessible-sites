import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function OTPScreen() {
  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length === 1) {
      event.target.nextElementSibling?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 py-16">
      <main className="flex flex-col gap-y-8 rounded-lg bg-white px-8 py-8 shadow-xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-y-2">
            <EnvelopeIcon aria-hidden className="h-8 w-8" />
            <h1 className="my-0 text-center text-2xl font-semibold">
              Please check your email
            </h1>
            <p className="my-0 max-w-lg text-center text-sm text-gray-500">
              We have sent a 4-digit code to your email. Please enter it below
              to continue.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-center gap-x-4">
            {Array(4)
              .fill("")
              .map((_, index) => {
                return (
                  <input
                    key={index}
                    type="tel"
                    inputMode="numeric"
                    className="h-12 w-12 rounded-lg border border-gray-300 text-center shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={handleChange}
                  />
                );
              })}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border-none bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-none shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}
