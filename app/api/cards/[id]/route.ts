import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { question, answer } = await req.json();
    await db.query('UPDATE cards SET question = ?, answer = ? WHERE id = ?', [question, answer, params.id]);
    return NextResponse.json({ success: true });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    await db.query('DELETE FROM cards WHERE id = ?', [params.id]);
    return NextResponse.json({ success: true });
}