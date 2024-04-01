import { ReactElement } from "react";

const Chevron = ({
  size
}: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      viewBox="0 0 24 24"
      fillRule="evenodd"
      fill="currentColor"
    >
      <path
        d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
      />
    </svg>
  );
};

interface Props {
  size?: string;
}

export default Chevron;