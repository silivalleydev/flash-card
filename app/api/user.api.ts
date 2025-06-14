// userApi.ts
// 클라이언트 또는 서버에서 사용할 수 있는 사용자 API 요청 모듈입니다.

const userApi = {
    // ✅ 회원가입 요청 (POST /api/signup)
    signupUser: async function signupUser(body: {
        id: string;
        password: string;
    }) {
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body), // 요청 본문에 유저 데이터 포함
        });

        // 응답이 실패일 경우 에러 발생 (API에서 상태코드 400~500대일 때)
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || 'Signup failed');
        }

        // 성공 시 응답 JSON 반환
        return res.json();
    },
    // ✅ 로그인 요청 (POST /api/login)
    loginUser: async function loginUser(body: {
        id: string;
        password: string;
    }) {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body), // 요청 본문에 유저 데이터 포함
        });

        // 응답이 실패일 경우 에러 발생 (API에서 상태코드 400~500대일 때)
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || 'Login failed');
        }

        // 성공 시 응답 JSON 반환
        return res.json();
    },
};

export default userApi;
