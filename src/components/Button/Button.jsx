import PropTypes from 'prop-types';
import { ButtonStyles } from './Button.styled';

function Button({ option, onLeaveFeedback }) {
  return (
    <ButtonStyles
      type="button"
      id={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </ButtonStyles>
  );
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
