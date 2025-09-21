export function calculateTimeLeft(due: Date) {
  const difference = new Date(due).getTime() - new Date().getTime();

  let timeLeft = {
    // total: difference,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      // total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    } as const;
  }

  return timeLeft;
}
