import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function getUser({ id }) {
  try {
    showLoading();
    const response = await API({ endpoint: `users/${id}` });
    hideLoading();
    return response;
  } catch (error) {
    showAlert({ message: error, isError: true });
  }
}
