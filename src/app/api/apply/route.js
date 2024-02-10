import Applicant from '@/app/(model)/applicants';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const applicants = await Applicant.find();
    return NextResponse.json({ applicants }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Error',
        e,
      },
      { status: 500 }
    );
  }
}

//export async function POST(request) {}
