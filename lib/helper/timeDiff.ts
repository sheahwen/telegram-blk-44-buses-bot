/**
 * Returns the number of seconds between a future date
 * and now (or otherwise specified)
 * @param timestamp in ISO format
 */
export const timeDiff = (timestamp: string, timestamp2?: string): number => {
  const t2 = new Date(timestamp);
  const t1 = timestamp2 ? new Date(timestamp2) : new Date();

  const diff = t2.getTime() - t1.getTime();

  return diff / 1000;
};
