import { showMessage } from 'react-native-flash-message';

const showError = (message: string): void => {
  showMessage({
    type: 'danger',
    message,
  });
};

const showSuccess = (message: string): void => {
  showMessage({
    type: 'success',
    message,
  });
};

const showInfo = (message: string): void => {
  showMessage({
    type: 'info',
    message,
  });
};

const showWarning = (message: string): void => {
  showMessage({
    type: 'warning',
    message,
  });
};

export { showError, showSuccess, showInfo, showWarning };
