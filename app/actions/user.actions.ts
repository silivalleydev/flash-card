'use server';

import userApi from '../api/user.api';

// ✅ 회원가입 액션
export async function signupUserAction(data: {
    name: string;
    email: string;
    password: string;
}) {
    try {
        const res = await userApi.signupUser(data);
        return { success: true, data: res };
    } catch (err) {
        console.error('Signup failed:', err);
        return {
            success: false,
            error: (err as Error).message || 'Signup error',
        };
    }
}

// ✅ 로그인 액션
export async function loginUserAction(id: string) {
    try {
        const res = await userApi.loginUser(id);
        return { success: true, data: res };
    } catch (err) {
        console.error('Login failed:', err);
        return {
            success: false,
            error: (err as Error).message || 'Login error',
        };
    }
}
