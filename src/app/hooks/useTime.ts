import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState<Date | null>(null); //null initially to avoid SSR hydration issues

  const culcTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setTime(new Date()); // Initialize time at client side

    const intervalId = setInterval(culcTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return time;
}