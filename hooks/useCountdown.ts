import { useSyncExternalStore } from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const subscribe = (onTick: () => void) => {
  const timer = setInterval(onTick, 1000);
  return () => clearInterval(timer);
};

// Whole seconds, so the snapshot only changes once per tick
const getSeconds = () => Math.floor(Date.now() / 1000);

// The server has no current time to show, which keeps hydration consistent
const getServerSeconds = () => null;

export default function useCountdown(target: Date): TimeLeft | null {
  const nowSeconds = useSyncExternalStore(subscribe, getSeconds, getServerSeconds);

  if (nowSeconds === null) return null;

  const difference = Math.max(target.getTime() - nowSeconds * 1000, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}
