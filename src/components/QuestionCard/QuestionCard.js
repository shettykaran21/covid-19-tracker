import React from 'react';

import styles from './QuestionCard.module.css';

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => {
  return (
    <div>
      <p className={styles.number}>
        Question: {questionNo} / {totalQuestions}
      </p>
      <p>{question}</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span>{answer}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
