// lib/csv.ts

/**
 * Sanitizes a value for CSV export, preventing Excel formula injection attacks
 * and handling null/undefined values safely.
 */
export const sanitizeCell = (value: unknown): string => {
  let s = value == null ? '' : String(value);
  // Prefix with single quote if starts with formula characters to prevent Excel injection
  if (/^[=+\-@]/.test(s)) s = `'${s}`;
  // Escape quotes by doubling them and wrap in quotes
  return `"${s.replace(/"/g, '""')}"`;
};

/**
 * Converts an array of objects to CSV format with headers.
 * @param data Array of objects to convert
 * @param headers Optional custom headers. If not provided, uses object keys from first item
 * @returns CSV string with BOM for Excel UTF-8 compatibility
 */
export const toCsv = <T extends Record<string, unknown>>(
  data: T[],
  headers?: string[]
): string => {
  const headerRow = headers || (data.length > 0 ? Object.keys(data[0]) : []);
  const csvRows = [
    headerRow.map(sanitizeCell).join(','),
    ...data.map(row =>
      headerRow.map(key => sanitizeCell(row[key])).join(',')
    )
  ];

  // Prepend BOM for Excel UTF-8 compatibility
  return '\uFEFF' + csvRows.join('\n') + (csvRows.length > 0 ? '\n' : '');
};

/**
 * Downloads CSV data as a file with the given filename.
 * @param filename The name of the file to download (without extension)
 * @param data The CSV data as a string
 */
export const downloadCsv = (filename: string, data: string): void => {
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename.endsWith('.csv') ? filename : `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(url);
};
