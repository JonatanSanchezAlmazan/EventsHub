import { hideAlert } from './hideAlert';
import { showAlert } from './showAlert';

export function validateForm(form) {
  hideAlert();
  let valid = true;

  const formElements = form.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.type !== 'submit' && element.value.trim() === '') {
      valid = false;
      showAlert({
        message: `Todos los campos son obligatorios`,
        isError: true,
        parentElement: form
      });
    }
  }

  return valid;
}
