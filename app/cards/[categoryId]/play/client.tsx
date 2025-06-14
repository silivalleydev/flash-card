'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './FlashcardPlayer.module.css';

export default function FlashcardPlayer({ params }: { params: { categoryId: string } }) {
    const [cards, setCards] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetch(`/api/cards?category=${params.categoryId}`)
            .then(res => res.json())
            .then(data => setCards(shuffle(data)));
    }, [params.categoryId]);

    const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);
    const current = cards[index];

    return (
        <div className={styles.container}>
            <button className={styles.homeButton} onClick={() => router.push('/category')}>홈으로</button>

            {current && (
                <div className={styles.card} onClick={() => setShowAnswer(!showAnswer)}>
                    <span className={showAnswer ? styles.answerText : styles.questionText}>
                        {showAnswer ? current.answer : current.question}
                    </span>
                </div>
            )}
            <div className={styles.controls}>
                <button className={styles.button} onClick={() => setIndex(i => Math.max(i - 1, 0))}>뒤로</button>
                <button className={styles.button} onClick={() => {
                    if (index + 1 >= cards.length) {
                        window.location.href = '/category';
                    } else {
                        setShowAnswer(false);
                        setIndex(i => i + 1);
                    }
                }}>다음</button>
            </div>
        </div>
    );
}
