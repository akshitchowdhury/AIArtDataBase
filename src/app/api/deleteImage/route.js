import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/lib/mongodb';
import Art from '@/app/models/ArtDB';

export async function DELETE(req) {
  await connectMongoDb();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, error: 'No ID provided' }, { status: 400 });
  }

  try {
    const deletedArt = await Art.findByIdAndDelete(id);

    if (!deletedArt) {
      return NextResponse.json({ success: false, error: 'Art not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: deletedArt }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
