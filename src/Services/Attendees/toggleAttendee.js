import { routes } from '../../Routes/routes';
import { hideLoading } from '../../Utils/hideLoading';
import { navigate } from '../../Utils/navigate';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function toogleAttendee({ userId, eventId, event }) {
  try {
    const body = {
      userId,
      eventId
    };
    showLoading();
    const response = await API({ method: 'PUT', body, isJson: true, endpoint: 'events/toggleAttendee' });
    hideLoading();
    showAlert({ message: response.message, isSucces: true });
    navigate({ event, route: routes[5] });
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
