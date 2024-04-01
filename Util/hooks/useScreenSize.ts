import { useEffect, useMemo, useState } from "react";

const useScreenSize = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const isMobile = useMemo(() => {
    return size <= 375;
  }, [size]);

  return {
    isMobile
  };
};

export default useScreenSize;
