import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      { message: 'get API 요청 성공!' },
      { status: 200 }
    );
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
