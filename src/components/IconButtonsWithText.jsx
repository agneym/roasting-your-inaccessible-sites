import {
  ArrowDownTrayIcon,
  PlusIcon,
  UserIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";

export const IconButtonsWithText = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-16">
      <button
        type="button"
        className="inline-flex h-fit w-fit items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <ArrowDownTrayIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Download
      </button>
      <button
        type="button"
        className="inline-flex h-fit w-fit items-center gap-x-1.5 rounded-md border border-indigo-600 bg-transparent px-2.5 py-1.5 text-sm font-semibold text-black shadow-none outline-none hover:border-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Add
      </button>
      <button
        type="button"
        className="inline-flex w-fit cursor-pointer items-center gap-x-1.5 rounded-md border border-transparent bg-transparent px-2.5 py-1.5 text-sm font-semibold text-black shadow-none outline-none hover:border hover:border-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <UserIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Profile
      </button>
      <button
        type="button"
        className="inline-flex w-fit items-center gap-x-2 rounded-xl border-none bg-pink-300 px-3 py-1.5 text-sm font-semibold text-black shadow-none hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        <ShareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Share
      </button>
    </div>
  );
};
