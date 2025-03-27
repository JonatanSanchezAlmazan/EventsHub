import { hideAlert } from './hideAlert';
import { passwordRegex } from './regex';
import { showAlert } from './showAlert';

export function validatePassword({ pass }) {
  hideAlert();
  const isValid = passwordRegex.test(pass);

  if (!isValid) {
    showAlert({ message: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial', isError: true });
  }

  return isValid;
}
