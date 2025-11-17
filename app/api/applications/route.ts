import { NextRequest, NextResponse } from 'next/server';
import { submitApplication } from '@/lib/actions/application.actions';

export async function POST(request: NextRequest) {
  console.log('API route /api/applications called');

  try {
    // TEMPORARILY SKIP AUTH FOR TESTING
    // Verify user is authenticated
    // const user = await getSSRUser();
    // if (!user) {
    //   return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    // }

    // Parse form data
    const formData = await request.formData();
    console.log('Form data keys:', Array.from(formData.keys()));

    // Submit the application
    const result = await submitApplication(formData);
    console.log('Application submission result:', result);

    if (result.success) {
      console.log('Returning success response');
      return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    } else {
      console.log('Returning error response:', result.message);
      return NextResponse.json({ error: result.message }, { status: 400 });
    }
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}