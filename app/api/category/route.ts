import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
    const [rows] = await db.query('SELECT * FROM categories');
    return NextResponse.json(rows);
}

export async function POST(req: Request) {
    const { name } = await req.json();
    await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
    return NextResponse.json({ success: true });
}