import { NextResponse } from 'next/server';
import { hashPassword } from '@/lib/crypto';
import { db } from '@/lib/db'; // 예: mysql2/promise로 연결된 모듈

export async function POST(req: Request) {
    const { id, password } = await req.json();

    const hashed = await hashPassword(password);

    try {
        await db.query('INSERT INTO users (id, password) VALUES (?, ?)', [
            id,
            hashed,
        ]);
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Signup error:', err);
        return new NextResponse('이미 존재하는 이메일이거나 서버 오류', { status: 400 });
    }
}
