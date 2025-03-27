import { hideAlert } from '../../Utils/hideAlert';
import { hideLoading } from '../../Utils/hideLoading';
import { emailRegex, passwordRegex } from '../../Utils/regex';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { validateEmail } from '../../Utils/validateEmail';
import { validateForm } from '../../Utils/validateForm';
import { validatePassword } from '../../Utils/validatePassword';
import { API } from '../API/API';
import { loginUser } from './loginUser';

export function registerUser({ form }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, firstName, email, password, rol, ubi, description] = form.elements;
    const body = {
      name: name.value,
      firstName: firstName.value,
      email: email.value,
      password: password.value,
      rol: rol.value,
      ubi: ubi.value,
      description: description.value
    };
    const isValidEmail = validateEmail({ email: email.value });
    if (!isValidEmail) return;
    const isValidPassword = validatePassword({ pass: password.value });
    if (!isValidPassword) return;
    const isFormValid = validateForm(form);
    if (!isFormValid) return;

    try {
      showLoading();
      const response = await API({ method: 'POST', body, isJson: true, endpoint: 'users/register' });
      hideLoading();
      showAlert({ message: response.message, isSucces: true, parentElement: form });
      hideAlert();
      const bodyLogin = {
        email: email.value,
        password: password.value
      };
      loginUser({ body: bodyLogin });
    } catch (error) {
      hideLoading();
      showAlert({ message: error, isError: true, parentElement: form });
      hideAlert();
    }
  });
}
