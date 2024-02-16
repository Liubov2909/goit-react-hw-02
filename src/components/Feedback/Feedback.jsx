import css from "./Feedback.module.css";

const Feedback = ({ type, total }) => {
  const positiveFeedback = Math.round(
    ((type.good + type.neutral) / total) * 100
  );

  return (
    <>
      <ul className={css.list}>
        <li>Good: {type.good}</li>
        <li>Neutral: {type.neutral}</li>
        <li>Bad: {type.bad}</li>
      </ul>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive: {positiveFeedback}%</p>
    </>
  );
};
export default Feedback;
