import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
export async function PATCH(req: Request, { params }: any) {
    const { name } = await req.json();
    await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, params.id]);
    return NextResponse.json({ success: true });
}

export async function DELETE(_: Request, { params }: any) {
    await db.query('DELETE FROM categories WHERE id = ?', [params.id]);
    return NextResponse.json({ success: true });
}