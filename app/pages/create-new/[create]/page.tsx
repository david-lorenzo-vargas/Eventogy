'use client'

import { ReactElement } from "react";

import { usePathname } from "next/navigation";

const CreateNew = (): ReactElement => {
  const path = usePathname();
  const pathName = path.split('/')[path.split('/').length - 1];
  
  return (
    <div className="h-screen w-screen flex flex-row items-center justify-center">
      <span className="text-3xl">
        {`Create new ${pathName}`}
      </span>
    </div>
  );
};

export default CreateNew;
