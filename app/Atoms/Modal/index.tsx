import { MouseEvent, ReactElement, useCallback, useEffect, useState } from "react";

import Close from "../../Icons/Close";

const Modal = ({
  children,
  onClose,
  title,
  mounted,
}: Props): ReactElement => {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    setDisplay(() => mounted);
  }, [mounted]);

  const onBackDrop = useCallback((e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    
    setDisplay(() => false);
  }, []);

  return (
    <div
      className={`
        ${display ? 'absolute' : 'hidden'}
        top-0
        left-0
        h-screen
        w-screen
        bg-black
        bg-opacity-40
        flex
        flex-row
        items-center
        justify-center
      `}
      onClick={onBackDrop}
    >
      <div className="bg-white rounded p-5">
        <div className="w-full flex flex-row items-center justify-end mb-5">
          <span>
            {title}
          </span>
          <button
            className="w-5 h-5 text-yolkYellow cursor-pointer ml-5"
            onClick={onClose}
            aria-label="closeButton"
          >
            <Close />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

interface Props {
  children: ReactElement;
  onClose: () => void;
  title?: string;
  mounted: boolean;
}

export default Modal;