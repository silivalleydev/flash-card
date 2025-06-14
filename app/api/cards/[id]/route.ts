import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
export async function PATCH(req: Request, { params }: any) {
    const { question, answer } = await req.json();
    await db.query('UPDATE cards SET question = ?, answer = ? WHERE id = ?', [question, answer, params.id]);
    return NextResponse.json({ success: true });
}

export async function DELETE(
    _: Request,
    { params }: any
) {
    try {
        await db.query('DELETE FROM cards WHERE id = ?', [params.id]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('카드 삭제 실패:', error);
        return NextResponse.json({ success: false, error: '삭제 실패' }, { status: 500 });
    }
}