import { NextResponse } from 'next/server';

const notes = { id: '1', title: '새로운 노트' };

// GET 요청: 현재 노트 가져오기
export async function GET() {
  return NextResponse.json(notes);
}

// PUT 요청: 노트 제목 업데이트
export async function PUT(request: Request) {
  const body = await request.json();
  const { title } = body;

  if (!title) {
    return NextResponse.json({ error: '제목이 필요합니다.' }, { status: 400 });
  }

  notes.title = title; // Mock 데이터 업데이트
  return NextResponse.json(notes);
}