import { ReactElement } from "react";

import Button from "@/Atoms/Button";

import Calendar from "@icon/Calendar";
import Templates from "@icon/Templates";
import Archive from "@icon/Archive";

import { Pill, PillEnum } from "@customTypes/types";

const pills = [
  {
    key: PillEnum.events,
    label: 'Events',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-white' : 'text-black'}`}>
        <Calendar size="12" />
      </div>
    )
  },
  {
    key: PillEnum.templates,
    label: 'Templates',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-white' : 'text-black'}`}>
        <Templates size="12" />
      </div>
    )
  },
  {
    key: PillEnum.archives,
    label: 'Archive',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-white' : 'text-black'}`}>
        <Archive size="12" />
      </div>
    )
  },
];

const Pills = ({
  pillActive,
  onPill,
}: Props): ReactElement => {
  return (
    <div className="flex flex-row items-center -mx-1">
      {pills.map((p: Pill) => (
        <div className="px-1" key={p.key}>
          <Button
            text={p.label}
            variant={pillActive === p.key ? 'contained' : 'outlined'}
            startIcon={p.Icon(pillActive === p.key)}
            onClick={() => onPill(p.key)}
          />
        </div>
      ))}
    </div>
  );
};

interface Props {
  pillActive: PillEnum;
  onPill: (p: PillEnum) => void;
}

export default Pills;
