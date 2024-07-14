import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/lib/mongodb';
import Art from '@/app/models/ArtDB';

export async function POST(req) {
  await connectMongoDb();

  try {
    const body = await req.json();
    const art = new Art(body);
    await art.save();
    return NextResponse.json({ success: true, data: art }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
