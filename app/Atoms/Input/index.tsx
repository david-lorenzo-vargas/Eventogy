import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";

import Search from "../../Icons/Search";

const Input = ({
  placeholder,
  inputName,
  label,
  type ='text',
  rounded,
  errorMessage,
  iconColour,
  onChange,
  value,
}: Props): ReactElement => {
  return (
    <div>
      {label && (
        <div className="mb-2">
          <span className="text-sm">
            {label}
          </span>
        </div>
      )}
      <div 
        className={`
          flex
          flex-row
          items-center
          bg-white
          ${errorMessage ? 'mb-2' : ''}
          ${rounded ? rounded : 'rounded-xl'}
        `}
      >
        {type === 'search' && (
          <div
            className={`flex flex-row items-center justify-center px-3 ${iconColour ? iconColour : ''}`}
          >
            <Search />
          </div>
        )}
        <input
          className={`
            bg-white
            w-full
            px-3
            py-2
            placeholder:text-xs
            placeholder:italic
            ${rounded ? rounded : 'rounded-xl'}
          `}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={inputName}
          aria-label={inputName}
          type={type}
        />
      </div>
      {!!errorMessage && (
        <span className="text-sm text-cancelRed">{errorMessage}</span>
      )}
    </div>
  );
};

interface Props {
  placeholder: string;
  inputName: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  rounded?: string;
  errorMessage?: string;
  iconColour?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default Input;