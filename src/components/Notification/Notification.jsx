import PropTypes from 'prop-types';
import { MessageText } from './Notification.styled';

function NotificationMessage({ message }) {
  return <>{message && <MessageText>{message}</MessageText>}</>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
