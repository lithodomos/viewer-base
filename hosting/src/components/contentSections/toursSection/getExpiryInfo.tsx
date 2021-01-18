import { formatDistanceStrict, differenceInCalendarDays } from 'date-fns';

export function getExpiryInfo(expiresAt: string | null | undefined) {
  let expiresIn = null;
  let expiresSoon = false;

  if (expiresAt) {
    const expiryDate = new Date(expiresAt);
    const now = new Date();

    expiresIn = formatDistanceStrict(expiryDate, now);

    const daysBeforeExpiration = differenceInCalendarDays(expiryDate, now);
    expiresSoon = daysBeforeExpiration < 7;
  }

  return { expiresIn, expiresSoon };
}
