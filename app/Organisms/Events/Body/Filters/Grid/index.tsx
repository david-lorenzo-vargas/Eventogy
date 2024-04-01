import { ReactElement } from "react";

import IconButton from "@/Atoms/IconButton";

import GridIcon from '@icon/Grid';
import List from "@icon//List";
import Controls from "@icon//Controls";

import { GridButton, GridEnum } from "@customTypes/types";

const grids = [
  {
    key: GridEnum.grid,
    label: 'grid',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-blue' : 'text-black'}`}>
        <GridIcon size="16"/>
      </div>
    )
  },
  {
    key: GridEnum.list,
    label: 'list',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-blue' : 'text-black'}`}>
        <List size="16"/>
      </div>
    )
  },
  {
    key: GridEnum.random,
    label: 'random',
    Icon: (active: boolean) => (
      <div className={`${active ? 'text-blue' : 'text-black'} rotate-90`}>
        <Controls size="16"/>
      </div>
    )
  }
];

const Grid = ({
  onGrid,
  gridActive,
}: Props): ReactElement => {
  return (
    <div className="flex flex-row items-center">
      {grids.map((g: GridButton) => (
        <div key={g.key}>
          <IconButton label={g.label} onClick={() => onGrid(g.key)}>
            {g.Icon(gridActive === g.key)}
          </IconButton>
        </div>
      ))}
    </div>
  );
};

interface Props {
  onGrid: (g: GridEnum) => void;
  gridActive: GridEnum;
}

export default Grid;
