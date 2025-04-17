import { hideLoading } from '../../Utils/hideLoading';
import { navigate } from '../../Utils/navigate';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function deleteUser({ id, event }) {
  try {
    showLoading();
    const response = await API({ method: 'DELETE', endpoint: `users/${id}` });
    hideLoading();
    showAlert({ message: response.message, isSucces: true });
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    navigate({ event, route: routes[2] });
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
