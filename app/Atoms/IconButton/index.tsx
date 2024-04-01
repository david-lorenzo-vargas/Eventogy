import { ReactElement } from "react";

import { IconButton as IconButtonUI } from "@mui/material";

const IconButton = ({
  children,
  label,
  onClick
}: Props): ReactElement => {
  return (
    <IconButtonUI aria-label={label} onClick={onClick}>
      {children}
    </IconButtonUI>
  );
};

interface Props {
  children: ReactElement;
  label: string;
  onClick: () => void;
}

export default IconButton;
