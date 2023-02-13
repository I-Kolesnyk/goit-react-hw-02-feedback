import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <StatisticsItem id="good">Good: {good}</StatisticsItem>
      <StatisticsItem id="neutral">Neutral: {neutral}</StatisticsItem>
      <StatisticsItem id="bad">Bad: {bad}</StatisticsItem>
      <StatisticsItem id="total">Total: {total}</StatisticsItem>
      <StatisticsItem id="positive">
        Positive feedback: {positivePercentage}%
      </StatisticsItem>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
