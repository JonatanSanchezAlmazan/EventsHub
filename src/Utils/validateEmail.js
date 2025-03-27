import { hideAlert } from './hideAlert';
import { emailRegex } from './regex';
import { showAlert } from './showAlert';

export function validateEmail({ email }) {
  const isValid = emailRegex.test(email);
  hideAlert();

  if (!isValid) {
    showAlert({ message: 'El email tiene que tener un formato válido', isError: true });
  }

  return isValid;
}
