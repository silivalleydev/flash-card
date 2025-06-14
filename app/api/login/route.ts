import { NextResponse } from 'next/server';
import { comparePassword } from '@/lib/crypto';
import { db } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export async function POST(req: Request) {
    const { id, password } = await req.json();

    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const user = Array.isArray(rows) ? rows[0] : null;

    if (!user) {
        return new NextResponse('해당 유저 없음', { status: 404 });
    }

    const isMatch = await comparePassword(password, (user as any).password);
    if (!isMatch) {
        return new NextResponse('비밀번호 불일치', { status: 401 });
    }

    // JWT 발급
    const token = jwt.sign({ id: (user as any).id }, JWT_SECRET, {
        expiresIn: '7d',
    });

    // 쿠키에 저장 (서버 전용)
    (cookies() as any).set('auth_token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return NextResponse.json({ success: true, user: { id: (user as any).id } });
}
