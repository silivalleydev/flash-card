'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ManageCards.module.css';

export default function ManageCardsPage({ params }: { params: { categoryId: string } }) {
    const [cards, setCards] = useState<any[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/category`)
            .then(res => res.json())
            .then(data => {
                const matched = data.find((c: any) => String(c.id) === params.categoryId);
                if (matched) setCategoryName(matched.name);
            });

        fetch(`/api/cards?category=${params.categoryId}`)
            .then(res => res.json())
            .then(setCards);
    }, [params.categoryId]);

    const handleAdd = async () => {
        await fetch('/api/cards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category_id: params.categoryId, question, answer })
        });
        setQuestion('');
        setAnswer('');
        const res = await fetch(`/api/cards?category=${params.categoryId}`);
        setCards(await res.json());
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/cards/${id}`, { method: 'DELETE' });
        setCards(cards.filter(c => c.id !== id));
    };

    return (
        <div className={styles.container}>
            <button className={styles.homeButton} onClick={() => router.push('/category')}>홈으로</button>

            <h2 className={styles.heading}>카테고리: {categoryName}</h2>
            <h3 className={styles.subheading}>카드 관리</h3>
            <div className={styles.inputGroup}>
                <input
                    className={styles.input}
                    placeholder="문제"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />
                <textarea
                    className={styles.textarea}
                    placeholder="정답"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    rows={3}
                />
                <button className={styles.button} onClick={handleAdd}>카드 추가</button>
            </div>

            <ul className={styles.list}>
                {cards.map(card => (
                    <li className={styles.listItem} key={card.id}>
                        <span className={styles.cardText}><strong>{card.question}</strong> / {card.answer}</span>
                        <button className={styles.deleteButton} onClick={() => handleDelete(card.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
