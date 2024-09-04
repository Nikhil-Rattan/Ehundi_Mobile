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

const  formatPhoneNumber = (phoneNumber: string) => {
  const phoneNumberStr = phoneNumber.toString();

  const firstPart = phoneNumberStr.slice(0, 5);
  const secondPart = phoneNumberStr.slice(5);

  return `${firstPart} ${secondPart}`;
}

export { showError, showSuccess, showInfo, showWarning, formatPhoneNumber };
