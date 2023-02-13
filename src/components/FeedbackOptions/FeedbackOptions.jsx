import PropTypes from 'prop-types';
import Button from 'components/Button';
import { ButtonContainer } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          option={option}
          onLeaveFeedback={() => onLeaveFeedback(option)}
        />
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
