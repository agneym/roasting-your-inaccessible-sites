import { HeartIcon } from "@heroicons/react/20/solid";
import { XMarkIcon, CogIcon } from "@heroicons/react/24/outline";

export const IconButtons = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-16">
      <button
        title="Heart"
        type="button"
        className="inline-flex h-fit cursor-pointer rounded-full border-none bg-transparent text-red-500 shadow-none focus:ring-1"
      >
        <HeartIcon className="h-8 w-8" />
      </button>
      <button
        title="Close"
        type="button"
        className="inline-flex h-fit cursor-pointer rounded-full border-none bg-transparent text-gray-800 shadow-none focus:ring-1"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      <button
        title="Settings"
        type="button"
        className="inline-flex h-fit cursor-pointer rounded-full border-2 border-green-600 bg-transparent p-2 text-gray-800 shadow-none focus:ring-1"
      >
        <CogIcon className="h-8 w-8" />
      </button>
    </div>
  );
};
