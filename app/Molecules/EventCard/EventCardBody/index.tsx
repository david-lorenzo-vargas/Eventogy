import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

const EventCardBody = ({
  title,
  index,
  dates,
  slug,
}: Props): ReactElement => {
  return (
    <Link
      href={`pages/event/${slug}`}
    >
      <div
        className="mb-20 rounded-xl overflow-hidden bg-blue h-200 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <Image
          src={`https://source.unsplash.com/featured/concert600x60${index}?q=80?orientation=landscape`}
          alt="event-image"
          width={600}
          height={250}
          className="h-200"
        />
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span className="text-xs text-black opacity-60">
          {dates}
        </span>
      </div>
      <div>
        <span className="text-xs font-semibold">
          London
        </span>
      </div>
    </Link>
  );
};

interface Props {
  title: string;
  index: number;
  dates: string;
  slug: string;
}

export default EventCardBody;
