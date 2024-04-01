'use client'

import { ReactElement } from "react";

import Link from "next/link";

import Input from "@/Atoms/Input";
import Avatar from "@/Atoms/Avatar";

import Logo from "@icon/Logo";

import useScreenSize from "@util/hooks/useScreenSize";

const LayoutHeader = (): ReactElement => {
  const {isMobile} = useScreenSize();

  return (
    <div className="flex flex-row items-center justify-between bg-mediumGray py-3 px-10 md:px-40">
      <Link href="/">
        <Logo size={!isMobile ? '100' : '70'} />
      </Link>
      <div className="w-60P md:w-33P">
        <Input
          inputName="header-searchbar"
          placeholder="Search Events, Attendees, Venues..."
          type="search"
          rounded="rounded-full"
          iconColour="text-black"
        />
      </div>
      <Avatar />
    </div>
  );
};

export default LayoutHeader;
