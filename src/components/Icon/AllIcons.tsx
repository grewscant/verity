import React from "react";

export const Info = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM9.99 10.99V13H10.99V17H14.01V15H13L13.01 10.991L9.99 10.99ZM10.99 7V9.019H13.01V7H10.99Z"
      fill="currentColor"
    />
  </svg>
);
