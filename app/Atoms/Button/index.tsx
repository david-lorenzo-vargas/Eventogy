import {Button as ButtonUI} from '@mui/material';

import { ReactElement } from 'react';

const Button = ({
  size,
  startIcon,
  text,
  variant,
  onClick,
}: Props) => {
  return (
    <ButtonUI
      size={size}
      startIcon={startIcon}
      variant={variant}
      className={`rounded-full ${variant === 'contained' ? 'bg-blue' : 'border border-black'}`}
      onClick={onClick}
    >
      <span
        className={`
          text-xs
          normal-case
          ${variant === 'contained' ? 'text-white' : 'text-black'}
        `}>
        {text}
      </span>
    </ButtonUI>
  );
};

interface Props {
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactElement;
  text: string;
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
}

export default Button;