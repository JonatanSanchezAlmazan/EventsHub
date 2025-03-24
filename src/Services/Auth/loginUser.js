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
      //! Meter loading y quitarlo
      const response = await API({ method: 'POST', endpoint: 'users/login', isJson: true, body });
      localStorage.setItem('user', JSON.stringify(response.user));
      window.location.reload();
    } catch (error) {
      //* Alerta
      console.log(error);
    }
  });
}
