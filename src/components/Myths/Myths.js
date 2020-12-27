import React, { useState } from 'react';
import { FaBrain } from 'react-icons/fa';

import { myths } from '../myths';
import QuestionCard from '../QuestionCard/QuestionCard';

import styles from './Myths.module.css';

const TOTAL_QUESTIONS = 10;

const Myths = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(myths.results);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const checkAnswer = (e) => {
    if (!gameover) {
      // Users answer
      const answer = e.currentTarget.value;

      // Check users answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if correct
      if (correct) setScore((prevScore) => prevScore + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  console.log(userAnswers);

  const nextQuestion = () => {
    const nextQues = number + 1;

    if (nextQues === TOTAL_QUESTIONS) {
      setGameover(true);
    } else {
      setNumber(nextQues);
    }
  };

  const startTrivia = () => {
    setLoading(true);
    setGameover(false);
    setQuestions(questions);
    setUserAnswers([]);
    setScore(0);
    setNumber(0);
    setLoading(false);
  };

  return (
    <div className={styles.myths}>
      <h2>
        Myths <FaBrain fill="pink" />
      </h2>

      {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
        <button
          onClick={startTrivia}
          className={`${styles.button} ${styles.buttonUjarak} ${styles.buttonBorderThin} ${styles.buttonTextThick}`}
        >
          Start
        </button>
      ) : null}

      {!gameover && <p className={styles.score}>Score: {score}</p>}
      {loading && <p>Loading questions...</p>}

      {!loading && !gameover && (
        <QuestionCard
          questionNo={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameover &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className={styles.next} onClick={nextQuestion}>
          Next Myth
        </button>
      ) : null}
    </div>
  );
};

export default Myths;
