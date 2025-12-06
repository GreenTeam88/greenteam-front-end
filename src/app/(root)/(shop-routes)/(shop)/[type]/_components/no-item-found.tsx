'use client';
// a component that we should diplay when there is no product that matches the filter of the user

export default function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center w-full ">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h9a2.25 2.25 0 002.25-2.25V12M9.75 9h4.5M9.75 15h1.5"
          />
        </svg>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-gray-800">No products found</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        We couldn’t find any products that match your filter. Try adjusting your filters or browse all items.
      </p>
    </div>
  );
}
