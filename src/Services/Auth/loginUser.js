import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { hideAlert } from '../../Utils/hideAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function loginUser({ form, body = {} }) {
  if (form) {
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
        showAlert({ message: 'Login realizado correctamente', isSucces: true, parentElement: form });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        hideLoading();
        showAlert({ message: error, isError: true, parentElement: form });
        hideAlert();
      }
    });
  } else {
    showLoading();
    const response = await API({ method: 'POST', endpoint: 'users/login', isJson: true, body });
    hideLoading();
    localStorage.setItem('user', JSON.stringify(response.user));
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
