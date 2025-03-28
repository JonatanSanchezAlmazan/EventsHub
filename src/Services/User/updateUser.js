import { routes } from '../../Routes/routes';
import { hideLoading } from '../../Utils/hideLoading';
import { navigate } from '../../Utils/navigate';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { validateEmail } from '../../Utils/validateEmail';
import { API } from '../API/API';

export function updateUser({ form, id, pond }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const [name, firstName, email, ubi, description] = form;
    const btnCancel = document.querySelector('#btnCancel');

    const files = pond.getFiles();

    let image = null;

    if (files.length > 0) {
      image = files[0].file;
    }
    if (email.value != '') {
      const isValidEmail = validateEmail({ email: email.value });
      if (!isValidEmail) return;
    }
    if (!image && name.value == '' && firstName.value == '' && email.value == '' && description.value == '') {
      showAlert({ message: 'Rellena algun campo para poder guardar los cambios', isError: true });
      return;
    }

    const formData = new FormData();
    if (name.value != '') {
      formData.append('name', name.value);
    }
    if (firstName.value != '') {
      formData.append('firstName', firstName.value);
    }
    if (email.value != '') {
      formData.append('email', email.value);
    }
    if (ubi.value != '') {
      formData.append('ubi', ubi.value);
    }
    if (description.value != '') {
      formData.append('description', description.value);
    }

    if (image) {
      formData.append('image', image);
    }
    try {
      showLoading();
      const response = await API({ method: 'PUT', body: formData, endpoint: `users/${id}` });
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(response.user));
      hideLoading();
      showAlert({ message: response.message, isSucces: true });
      btnCancel.click();
    } catch (error) {
      hideLoading();
      showAlert({ message: error, isError: true });
    }
  });
}
