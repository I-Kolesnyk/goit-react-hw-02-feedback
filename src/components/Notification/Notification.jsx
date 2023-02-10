import PropTypes from 'prop-types';

function NotificationMessage({ message }) {
  return <>{message && <p>{message}</p>}</>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
