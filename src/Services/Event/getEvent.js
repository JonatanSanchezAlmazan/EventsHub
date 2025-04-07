import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function getEvent({ id }) {
  try {
    showLoading();
    const response = await API({ endpoint: `events/${id}` });
    hideLoading();
    return response;
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
