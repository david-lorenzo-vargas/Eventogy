import { ReactElement, useCallback, useMemo, useState } from "react";

import EventCardBody from "./EventCardBody";
import Footer from "./Footer";

import { toNiceDateFormat } from "@util/toNiceDateFormat";

const EventCard = ({
  title,
  index,
  startDate,
  endDate,
  liked,
  onLike,
  slug,
}: Props): ReactElement => {
  const [moreActions, setMoreActions] = useState<boolean>(false);

  const onMore = useCallback(() => {
    setMoreActions((a: boolean) => !a);
  }, []);

  const getEventDates = useMemo(() => {
    return `${toNiceDateFormat(startDate)} - ${toNiceDateFormat(endDate)}`
  }, [endDate, startDate]);

  return (
    <div
      className="rounded-xl border shadow-xl bg-white border-xl overflow-hidden h-full relative"
    >
      <div className="w-full h-8 bg-blue"/>
      <div className="p-20">
        <EventCardBody
          title={title}
          index={index}
          dates={getEventDates}
          slug={slug}
        />
        <div>
          <Footer
            liked={liked}
            onLike={onLike}
            onMore={onMore}
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  onEventCard: () => void;
  index: number;
  startDate: Date;
  endDate: Date;
  liked: boolean;
  onLike: () => void;
  slug: string;
}

export default EventCard;
