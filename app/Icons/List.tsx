import { ReactElement } from "react";

const List = ({
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
        d="M2 23h-2v-2h2v2zm0-12h-2v2h2v-2zm0 5h-2v2h2v-2zm0-15h-2v2h2v-2zm2 0v2h20v-2h-20zm-2 5h-2v2h2v-2zm2 7h20v-2h-20v2zm0 10h20v-2h-20v2zm0-15h20v-2h-20v2zm0 10h20v-2h-20v2z"
      />
    </svg>
  );
};

interface Props {
  size?: string;
}

export default List;
