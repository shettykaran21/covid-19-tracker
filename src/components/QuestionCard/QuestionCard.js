import React, { useState } from 'react';
import { FaBorderNone } from 'react-icons/fa';

import styles from './QuestionCard.module.css';

const buttonStyle = {
  backgroundColor: 'transparent',
  padding: '2rem 2rem',
  color: 'var(--color-white)',
  outline: 'none',
  border: '1px solid var(--color-grey-3)',
  cursor: 'pointer',
  width: '100%',
  margin: '1rem 0',
  fontFamily: 'inherit',
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
  fact,
}) => {
  return (
    <div className={styles.questionCard}>
      <p className={styles.number}>
        Question: {questionNo} / {totalQuestions}
      </p>
      <p className={styles.question}>{question}</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
            style={buttonStyle}
          >
            <span>{answer}</span>
          </button>
        </div>
      ))}

      {userAnswer && userAnswer.correctAnswer === userAnswer.answer ? (
        <div style={{ color: 'var(--color-green)' }}>You got it right!</div>
      ) : (
        <div></div>
      )}

      {userAnswer && <div className={styles.fact}>{fact}</div>}
    </div>
  );
};

export default QuestionCard;
