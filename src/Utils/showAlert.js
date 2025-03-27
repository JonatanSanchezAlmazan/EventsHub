import { Alert } from '../Components/Alert/Alert';
import { hideAlert } from './hideAlert';

export function showAlert({ message, isError = false, isSucces = false }) {
  hideAlert();

  const alert = Alert({ message, isError, isSucces });
  document.body.appendChild(alert);

  setTimeout(() => {
    hideAlert(alert);
  }, 3000);
}
