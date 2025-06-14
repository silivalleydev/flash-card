'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/category');
  }, [router]);

  return null; // 또는 로딩 인디케이터 등
}
