import { ReactElement } from "react";

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

import Chevron from "@icon/Chevron";

const Icon = (): ReactElement => {
  return (
    <div className="mr-10">
      <Chevron size="12"/>
    </div>
  );
};

const Dropdown = ({
  options,
  value,
  onDropdownChange,
  id,
  defaultValue,
}: Props): ReactElement => {
  return (
    <FormControl className="h-40">
      <InputLabel
        id={id}
        className="text-white text-sm -mt-7"
      >
        {value || defaultValue}
      </InputLabel>
      <Select
        labelId={id}
        id="dropdown-select"
        value={value}
        label={defaultValue}
        onChange={(e: SelectChangeEvent<string>) => onDropdownChange(e.target.value)}
        className="bg-inputBlue rounded-xl border-0 flex flex-row items-center h-40 w-full"
        IconComponent={Icon}
        sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white', paddingRight: '50px' }, minWidth: 120 }}
      >
        {options.map((o: string) => (
          <MenuItem value={o} key={o}>
            <em>{o}</em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface Props {
  options: string[];
  value?: string;
  onDropdownChange: (o: string) => void;
  id: string;
  defaultValue: string;
}

export default Dropdown;
