'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CategoryList.module.css';

export default function CategoryListPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [name, setName] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetch('/api/category')
            .then(res => res.json())
            .then(setCategories);
    }, []);

    const handleAdd = async () => {
        await fetch('/api/category', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
        });
        setName('');
        const res = await fetch('/api/category');
        setCategories(await res.json());
    };
    const handleDelete = async (id: number) => {
        await fetch(`/api/category/${id}`, { method: 'DELETE' });
        setCategories(categories.filter(c => c.id !== id));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>카테고리 목록</h2>

            <div className={styles.inputGroup}>
                <input
                    className={styles.input}
                    placeholder="새 카테고리 이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.button} onClick={handleAdd}>추가</button>
            </div>

            <ul className={styles.list}>
                {categories.map(cat => (
                    <li className={styles.listItem} key={cat.id}>
                        <span className={styles.name}>{cat.name}</span>
                        <div className={styles.actions}>
                            <button onClick={() => router.push(`/cards/${cat.id}/manage`)}>카드 관리</button>
                            <button onClick={() => router.push(`/cards/${cat.id}/play`)}>플레이</button>
                            <button onClick={() => handleDelete(cat.id)}>삭제</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}