import { routes } from '../../Routes/routes';
import { hideLoading } from '../../Utils/hideLoading';
import { navigate } from '../../Utils/navigate';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function deleteEvent({ id, event }) {
  try {
    showLoading();
    const response = await API({ method: 'DELETE', endpoint: `events/${id}` });
    hideLoading();
    showAlert({ message: response.message, isSucces: true });
    navigate({ event, route: routes[3] });
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
