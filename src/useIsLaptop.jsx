// hooks/useIsLaptop.js
import { useEffect, useState } from 'react';

const useIsLaptop = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLaptop;
};

export default useIsLaptop;
