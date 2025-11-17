/**
 * Convert a Date object to a datetime-local input value
 * @param date Date to convert
 * @returns String in YYYY-MM-DDTHH:MM format
 */
export const toDateTimeLocal = (date: Date): string => {
  const pad = (value: number) => String(value).padStart(2, "0");
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

/**
 * Format a date for display with timezone
 * @param date Date to format
 * @returns Formatted date string with timezone
 */
export const formatDateTimeWithTimezone = (date: Date): string => {
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
};

/**
 * Check if a date is in the past
 * @param date Date to check
 * @returns True if the date is before now
 */
export const isPastDate = (date: Date): boolean => {
  return date < new Date();
};
