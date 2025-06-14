// 단방향 암호화를 위한 bcrypt, 양방향 암호화를 위한 crypto 모듈 임포트
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// AES 양방향 암호화를 위한 비밀 키 (환경변수에서 불러오고, 없으면 기본값 사용)
const SECRET = process.env.AES_SECRET || 'default_secret_key';

// ✅ [단방향] 비밀번호 해시 함수 (bcrypt 사용, salt 라운드는 10)
export const hashPassword = (plain: string) => bcrypt.hash(plain, 10);

// ✅ [단방향] 평문 비밀번호와 해시를 비교하는 함수 (true/false 반환)
export const comparePassword = (plain: string, hash: string) => bcrypt.compare(plain, hash);

// ✅ [양방향] 텍스트를 AES-256-ECB 방식으로 암호화 (복호화 가능)
export const encrypt = (text: string) => {
    // 암호화 객체 생성: 알고리즘 AES-256-ECB, 키는 Buffer 형태로 전달, ECB는 IV 없음
    const cipher = crypto.createCipheriv('aes-256-ecb', Buffer.from(SECRET), null);

    // 평문을 암호화 시작 (UTF-8 입력 → HEX 출력)
    let encrypted = cipher.update(text, 'utf8', 'hex');

    // 암호화 마무리 후 결과 이어붙이기
    encrypted += cipher.final('hex');

    // 최종 암호문 반환
    return encrypted;
};

// ✅ [양방향] AES-256-ECB 방식으로 암호화된 텍스트를 복호화
export const decrypt = (encrypted: string) => {
    // 복호화 객체 생성 (암호화와 같은 키, 같은 알고리즘 사용해야 함)
    const decipher = crypto.createDecipheriv('aes-256-ecb', Buffer.from(SECRET), null);

    // 암호문 복호화 시작 (HEX 입력 → UTF-8 출력)
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');

    // 복호화 마무리 후 결과 이어붙이기
    decrypted += decipher.final('utf8');

    // 최종 평문 반환
    return decrypted;
};
