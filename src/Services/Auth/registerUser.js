import { hideAlert } from '../../Utils/hideAlert';
import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';
import { loginUser } from './loginUser';

export function registerUser({ form }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, firstName, email, password, rol, ubi, description] = form;
    const body = {
      name: name.value,
      firstName: firstName.value,
      email: email.value,
      password: password.value,
      rol: rol.value,
      ubi: ubi.value,
      description: description.value
    };

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
  });
}
