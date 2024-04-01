import { ReactElement } from "react";

import Dropdown from "@/Atoms/Dropdown";

import Pills from "./Pills";
import Grid from "./Grid";

import { GridEnum, PillEnum } from "@customTypes/types";

const dropdownOptions = ['Event', 'Template', 'Archive'];

const Filters = ({
  filterActive,
  onFilter,
  onGrid,
  gridActive,
  onDropdownChange,
  isMobile,
}: Props): ReactElement => {
  return (
    <div
      className={`
        flex
        ${isMobile ? 'flex-col justify-start' : 'flex-row justify-between items-center'} py-20
      `}
    >
      <div className="mb-10 md:mb-0">
        <Pills pillActive={filterActive} onPill={onFilter} />
      </div>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row items-center'}`}>
        <div className="mb-10 md:mb-0">
          <Grid onGrid={onGrid} gridActive={gridActive} />
        </div>
        <div className="md:ml-5">
          <Dropdown
            id="create-dropdown"
            defaultValue="Create New"
            onDropdownChange={onDropdownChange}
            options={dropdownOptions}
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  filterActive: PillEnum;
  onFilter: (p: PillEnum) => void;
  onGrid: (g: GridEnum) => void;
  gridActive: GridEnum;
  onDropdownChange: (o: string) => void;
  isMobile?: boolean;
}

export default Filters;
