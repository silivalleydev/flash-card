import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
export async function GET(req: Request) {
    const categoryId = new URL(req.url).searchParams.get('category');
    const [rows] = await db.query('SELECT * FROM cards WHERE category_id = ?', [categoryId]);
    return NextResponse.json(rows);
}

export async function POST(req: Request) {
    const { category_id, question, answer } = await req.json();
    await db.query(
        'INSERT INTO cards (category_id, question, answer) VALUES (?, ?, ?)',
        [category_id, question, answer]
    );
    return NextResponse.json({ success: true });
}