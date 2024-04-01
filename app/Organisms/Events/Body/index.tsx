'use client'

import { ReactElement, useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import Filters from "./Filters";
import EventCard from "@/Molecules/EventCard";
import Button from "@/Atoms/Button";
import Modal from "@/Atoms/Modal";

import { Event, GridEnum, PillEnum } from "@customTypes/types";

import useScreenSize from "@util/hooks/useScreenSize";

const Body = ({
  events,
}: Props): ReactElement => {
  const [filterActive, setFilterActive] = useState<PillEnum>(PillEnum.events);
  const [gridActive, setGridActive] = useState<GridEnum>(GridEnum.grid);
  const [liked, setLiked] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const router = useRouter();
  const {isMobile} = useScreenSize();

  const onFilter = useCallback((p: PillEnum) => {
    setFilterActive(() => p);
  }, []);

  const onGrid = useCallback((g: GridEnum) => {
    setGridActive(() => g);
  }, []);

  const onDropdownChange = useCallback((create: string) => {
    router.push(`pages/create-new/${create}`);
  }, [router]);

  const onEventCard = useCallback((slug: string) => {
    router.push(slug);
  }, [router]);

  const onLike = useCallback((id: string) => {
    setLiked((l: string[]) => {
      if (l.includes(id)) {
        return l.filter((li: string) => li !== id);
      } else {
        return [...l, id];
      }
    })
  }, []);

  const onFilters = useCallback(() => {
    setShowFilters(() => true);
  }, []);

  return (
    <div className="bg-lightGray h-screen md:px-40 realtive">
      <div className="mb-5">
        {!isMobile ? (
          <Filters
            filterActive={filterActive}
            onFilter={onFilter}
            gridActive={gridActive}
            onGrid={onGrid}
            onDropdownChange={onDropdownChange}
          />
        ) : (
          <div className="flex flex-row items-center justify-between py-20 px-10">
            <Button
              text="Filters"
              variant="contained"
              onClick={onFilters}
            />
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap w-full items-strech">
        {events.map((e: Event, ix: number) => (
          <div key={e.id} className="px-1 w-full md:w-25P mb-20 flex-grow">
            <EventCard
              title={e.name}
              onEventCard={() => onEventCard(e.slug)}
              index={ix}
              liked={liked.includes(e.id)}
              onLike={() => onLike(e.id)}
              startDate={e.data.scheduled_dates[0]}
              endDate={e.data.scheduled_dates[e.data.scheduled_dates.length - 1]}
              slug={e.slug}
            />
          </div>
        ))}
      </div>
      <Modal mounted={showFilters} onClose={() => setShowFilters(false)}>
        <Filters
          filterActive={filterActive}
          onFilter={onFilter}
          gridActive={gridActive}
          onGrid={onGrid}
          onDropdownChange={onDropdownChange}
          isMobile={isMobile}
        />
      </Modal>
    </div>
  );
};

interface Props {
  events: Event[];
}

export default Body;
