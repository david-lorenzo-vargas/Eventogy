import { ReactElement } from "react";

export type EventData = {
  timezone: string;
  location_long: number;
  location_lat: number;
  scheduled_dates: Date[];
}

export type Event = {
  id: string;
  name: string;
  slug: string;
  status: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  data: EventData;
}

export type Pill = {
  key: PillEnum;
  label: string;
  Icon: (active: boolean) => ReactElement;
}

export type GridButton = {
  key: GridEnum;
  label: string;
  Icon: (active: boolean) => ReactElement;
}

export enum PillEnum {
  events = 'events',
  templates = 'templates',
  archives = 'archives',
}

export enum GridEnum {
  grid = 'grid',
  list = 'list',
  random = 'random'
}