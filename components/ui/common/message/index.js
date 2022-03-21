import { useState } from "react";

const TYPES = {
  success: "green",
  warning: "yellow",
  danger: "red",
};

const BG_CLASSES = {
  success: "bg-green-100",
  warning: "bg-yellow-100",
  danger: "bg-red-100",
};

const TEXT_CLASSES = {
  success: "text-green-100",
  warning: "text-yellow-100",
  danger: "text-red-100",
};

const SIZES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export default function Message({ children, type = "success", size = "md" }) {
  const [isDisplayed, setIsDisplayed] = useState(true);

  if (!isDisplayed) {
    return null;
  }

  const messageType = TYPES[type];
  const messageSizeClass = SIZES[size];

  return (
    <div className={`${BG_CLASSES[type]} rounded-xl mb-3`}>
      <div className="px-1 py-2 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <div
              className={`ml-3 ${messageSizeClass} font-medium text-${TEXT_CLASSES[type]}-900`}
            >
              <span className="inline">{children}</span>
            </div>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              onClick={() => setIsDisplayed(false)}
              type="button"
              className="flex p-2 -mr-1 rounded-md focus:outline-none focus:ring-2 sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className={`h-6 w-6 text-${TEXT_CLASSES[type]}-900`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
