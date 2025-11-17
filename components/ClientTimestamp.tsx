"use client";

import { useEffect, useState } from "react";

interface ClientTimestampProps {
  date: string; // ISO date string
  options?: Intl.DateTimeFormatOptions;
}

export function ClientTimestamp({ date, options }: ClientTimestampProps) {
  const [formatted, setFormatted] = useState<string>("");

  useEffect(() => {
    const dateObj = new Date(date);
    setFormatted(dateObj.toLocaleDateString(undefined, options));
  }, [date, options]);

  return <span>{formatted}</span>;
}
