import { Alert } from '../Components/Alert/Alert';

export function showAlert({ message, isError = false, isSucces = false, parentElement }) {
  const alert = Alert({ message, isError, isSucces });
  parentElement.appendChild(alert);
}
