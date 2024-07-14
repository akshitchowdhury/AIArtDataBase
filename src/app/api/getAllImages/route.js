import { NextResponse } from 'next/server';

import Art from '@/app/models/ArtDB';
import connectMongoDb from '@/app/lib/mongodb';

export async function GET(req) {
  await connectMongoDb();

  try {
    const arts = await Art.find({});
    return NextResponse.json({ success: true, data: arts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// export async function POST(req) {
//   await dbConnect();

//   try {
//     const body = await req.json();
//     const art = new Art(body);
//     await art.save();
//     return NextResponse.json({ success: true, data: art }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//   }
// }
