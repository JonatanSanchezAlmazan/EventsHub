import { hideAlertForm } from '../../Utils/hideAlertForm';
import { hideLoading } from '../../Utils/hideLoading';
import { showAlertForm } from '../../Utils/showAlertForm';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function loginUser({ form }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [email, password] = form;
    const body = {
      email: email.value,
      password: password.value
    };
    try {
      showLoading();
      const response = await API({ method: 'POST', endpoint: 'users/login', isJson: true, body });
      hideLoading();
      localStorage.setItem('user', JSON.stringify(response.user));
      window.location.reload();
    } catch (error) {
      hideLoading();
      showAlertForm({ message: error, parentElement: form });
      hideAlertForm();
    }
  });
}
