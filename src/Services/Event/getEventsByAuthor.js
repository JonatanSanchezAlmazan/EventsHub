import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function getEventsByAuthor({ idAuthor }) {
  try {
    showLoading();
    const response = await API({ endpoint: `events/author/${idAuthor}` });
    hideLoading();
    return response.events;
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
