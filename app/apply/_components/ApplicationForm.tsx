// components/apply/ApplicationForm.tsx
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AppType } from "@prisma/client";
import { createApplication } from "@/lib/actions/application.actions";
import { makeActionResult } from "@/lib/types";

import ContactInfoSection from "./form-sections/ContactInfoSection";
import FosterSpecificSection from "./form-sections/FosterSpecificSection";
import HousingInfoSection from "./form-sections/HousingInfoSection";
import ReasonSection from "./form-sections/ReasonSection";
import ReferencesSection from "./form-sections/ReferencesSection";

interface ApplicationFormProps {
  formType: AppType;
  dogId?: number;
}


// This is a real submit button
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit" // <-- This is a REAL submit button
      disabled={pending}
      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      data-testid="btn-submit-application"
    >
      {pending ? 'Submitting...' : 'Submit Application'}
    </button>
  );
}

export default function ApplicationForm({ formType, dogId }: ApplicationFormProps) {
  // Use the server action
  const [state, formAction] = useActionState(createApplication, makeActionResult());

  return (
    <div className="flex-1 w-full flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {formType === AppType.ADOPTER ? 'Adoption' : 'Foster'} Application
        </h1>

        {/* This is now a real form */}
        <form
          action={formAction} // <-- Pass the action
          className="space-y-8"
          data-testid={formType === AppType.ADOPTER ? "adopt-form" : "foster-form"}
        >
          <input type="hidden" name="formType" value={formType} />
          {dogId && <input type="hidden" name="dogId" value={dogId.toString()} />}

          {/* Pass the server errors down to the sections */}
          <ContactInfoSection errors={state.fieldErrors} savedData={null} previousData={null} userProfile={null} />
          <HousingInfoSection errors={state.fieldErrors} savedData={null} previousData={null} />
          {formType === AppType.FOSTER && (
            <FosterSpecificSection errors={state.fieldErrors} savedData={null} previousData={null} />
          )}
          <ReasonSection formType={formType} errors={state.fieldErrors} savedData={null} previousData={null} />
          <ReferencesSection errors={state.fieldErrors} savedData={null} previousData={null} />

          {/* Show global error message */}
          {state.message && !state.success && (
            <div className="text-red-500" role="alert">
              {state.message}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
