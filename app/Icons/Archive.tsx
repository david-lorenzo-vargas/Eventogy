import { ReactElement } from "react";

const Archive = ({
  size,
}: Props): ReactElement => {
  return (
    <svg
      width={size ? size : '24'}
      height={size ? size : '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      fill="currentColor"
      clipRule="evenodd"
    >
      <path
        d="M24 7h-1v16h-22v-16h-1v-6h24v6zm-2 0h-20v15h20v-15zm-6 8h-8v-4h8v4zm-1-3h-6v2h6v-2zm8-10h-22v4h22v-4z"
      />
    </svg>
  );
};

interface Props {
  size?: string;
}

export default Archive;
