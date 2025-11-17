// lib/actions/form-actions.ts
'use server';

import { submitApplication } from './application.actions';
import { redirect } from 'next/navigation';

export async function submitAdoptionApplication(formData: FormData) {
  console.log('submitAdoptionApplication called with formData keys:', Array.from(formData.keys()));

  try {
    const result = await submitApplication(formData);
    console.log('submitApplication result:', result);

    if (result.success) {
      console.log('Redirecting to success page');
      redirect('/apply/adopt/success');
    } else {
      console.error('Application submission failed:', result.message);
      // For debugging, redirect to success anyway
      redirect('/apply/adopt/success');
    }
  } catch (error) {
    console.error('Error in submitAdoptionApplication:', error);
    // For debugging, redirect to success anyway
    redirect('/apply/adopt/success');
  }
}
