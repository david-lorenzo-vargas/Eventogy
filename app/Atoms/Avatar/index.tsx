import { ReactElement } from "react";
import Image from "next/image";

import User from "../../Icons/User";

const Avatar = ({
  src,
  alt,
}: Props): ReactElement => {
  return (
    <div
      className="bg-white flex flex-row items-center justify-center rounded-full h-40 w-40"
    >
      {src ? (
        <Image src={src} alt={alt as string}/>
      ) : (
        <User size="16" />
      )}
    </div>
  );
};

interface Props {
  src?: string;
  alt?: string;
}

export default Avatar;
