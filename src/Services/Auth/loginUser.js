import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { hideAlert } from '../../Utils/hideAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

import { validateEmail } from '../../Utils/validateEmail';
import { validatePassword } from '../../Utils/validatePassword';

export async function loginUser({ form, body = {} }) {
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const [email, password] = form;

      const isValidEmail = validateEmail({ email: email.value });
      if (!isValidEmail) return;
      const isValidPassword = validatePassword({ pass: password.value });
      if (!isValidPassword) return;

      const body = {
        email: email.value,
        password: password.value
      };
      try {
        showLoading();
        const response = await API({ method: 'POST', endpoint: 'users/login', isJson: true, body });
        hideLoading();
        localStorage.setItem('user', JSON.stringify(response.user));
        showAlert({ message: 'Login realizado correctamente', isSucces: true });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.log(error);
        hideLoading();
        showAlert({ message: error, isError: true }); 
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
