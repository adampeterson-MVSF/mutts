// lib/schemas/shift.schema.ts

import { z } from "zod";

export const shiftSchema = z.object({
  title: z.string().transform(s => s.trim()).refine(Boolean, 'Title required'),
  description: z.string().optional(),
  startsAt: z.string().min(1, 'Start time is required')
    .refine((val) => !isNaN(Date.parse(val)), 'Invalid start time format'),
  endsAt: z.string().min(1, 'End time is required')
    .refine((val) => !isNaN(Date.parse(val)), 'Invalid end time format'),
  capacity: z.preprocess((val) => val === '' || val === null || val === undefined ? null : Number(val), z.number().int().positive().nullable()),
}).superRefine((v, ctx) => {
  if (new Date(v.endsAt) <= new Date(v.startsAt)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['endsAt'],
      message: 'Start time must be before end time',
    })
  }
})

export type ShiftFormData = z.infer<typeof shiftSchema>;
