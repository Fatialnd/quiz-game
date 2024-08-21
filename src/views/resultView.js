import { SCORE_VALUE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
/**
 * Create a Score element
 * @returns {Element}
 */
export const createResultElement = () => {
  const score = Number(localStorage.getItem('currentScore'));
  const element = document.createElement('div');
  element.classList.add('result-container');

  let resultText;
  if (score < 4) {
    element.classList.add('low');
    resultText =
      'Not your best result. Review the material and try again. You can improve!';
  } else if (score >= 4 && score <= 7) {
    element.classList.add('average');
    resultText =
      "Good job! You have a solid understanding, but there's room for improvement. Keep practicing!";
  } else if (score > 7) {
    element.classList.add('high');
    resultText =
      'Excellent work! You really know your stuff. Keep up the great work!';
  }

  element.innerHTML = String.raw`
    <h1>Quiz Results</h1>
    <p>${resultText}</p>
    <p>Your score: <span id="${SCORE_VALUE_ID}">${score}</span> / 10</p>
    <button id="${RESTART_QUIZ_BUTTON_ID}">Try Again</button>
  `;
  return element;
};
