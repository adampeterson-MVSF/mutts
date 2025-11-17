import { DogStatus, LogType } from "@prisma/client";
import { z } from "zod";

const emptyStringToNull = (value: unknown) => {
  if (value === null || value === undefined) return null;
  const str = String(value).trim();
  return str.length > 0 && str !== "none" ? str : null;
};


const checkboxValue = (value: unknown) =>
  value === true || value === "true" || value === "on";

export const dogFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  status: z.nativeEnum(DogStatus).optional(),
  breed: z.preprocess(emptyStringToNull, z.string().nullable()),
  dateOfBirth: z
    .preprocess((value) => {
      if (!value || value === '' || typeof value !== 'string' && typeof value !== 'number' && !(value instanceof Date)) return null;
      const date = new Date(value);
      return isNaN(date.getTime()) ? null : date;
    }, z.date().nullable())
    .nullable(),
  bioPublic: z.preprocess(emptyStringToNull, z.string().nullable()),
  notesInternal: z.preprocess(emptyStringToNull, z.string().nullable()),
  fosterProfileId: z.preprocess((value) => {
    if (value === null || value === undefined) return null;
    const str = String(value).trim();
    if (str.length === 0 || str === "none") return null;
    return str; // Profile ID is a string
  }, z.string().nullable()),
  specialNeeds: z.preprocess(checkboxValue, z.boolean()),
}).refine((data) => {
  if (data.status === DogStatus.IN_FOSTER) {
    return data.fosterProfileId !== null && data.fosterProfileId !== undefined && data.fosterProfileId.trim() !== '';
  }
  return true;
}, {
  message: "Foster profile is required when status is IN_FOSTER",
  path: ["fosterProfileId"],
});

export type DogFormInput = z.infer<typeof dogFormSchema>;

export const logEntrySchema = z.object({
  dogId: z.coerce.number().int().positive({ message: "Dog ID is required." }),
  logType: z.nativeEnum(LogType),
  notes: z.preprocess(emptyStringToNull, z.string().nullable()),
});

export type LogEntryInput = z.infer<typeof logEntrySchema>;

export const shiftIdSchema = z.object({
  shiftId: z
    .preprocess((value) => {
      const num = Number(value);
      return Number.isFinite(num) ? num : Number.NaN;
    },
    z
      .number({ message: "Invalid shift ID" })
      .int({ message: "Invalid shift ID" })
      .positive({ message: "Invalid shift ID" })),
});

export type ShiftIdInput = z.infer<typeof shiftIdSchema>;

export const eventFormSchema = z
  .object({
    title: z.string().min(1, { message: "Title is required." }),
    description: z.preprocess(emptyStringToNull, z.string().nullable()),
    startTime: z.string().min(1, { message: "Start time is required." }),
    endTime: z.string().min(1, { message: "End time is required." }),
    location: z.preprocess(emptyStringToNull, z.string().nullable()),
    capacity: z.preprocess(emptyStringToNull, z.coerce.number().int().positive().nullable()),
  })
  .refine(
    (data) => {
      const start = Date.parse(data.startTime);
      const end = Date.parse(data.endTime);
      return !Number.isNaN(start) && !Number.isNaN(end) && start < end;
    },
    {
      message: "End time must be after start time.",
      path: ["endTime"],
    },
  );

export type EventFormInput = z.infer<typeof eventFormSchema>;

export { applicationSchema } from "./zod/applicationSchema";
export { shiftSchema } from "./zod/shift.schema";
