'use client'

import { useEffect, useState } from "react";

import Spinner from "@/Atoms/Spinner";
import Header from "./Header";
import Body from "./Body";

import fetchEvents from "@api/fetchEvents";

import { Event } from "@customTypes/types";

const Events = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    (async () => {
      const res: Event[] = await fetchEvents();

      setLoading(() => false)
      setEvents(() => res);
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen w-screen white flex flex-row items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <Header />
          <Body events={events}/>
        </div>
      )}
    </div>
  );
};

export default Events;