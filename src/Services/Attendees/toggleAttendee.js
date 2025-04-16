import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function toogleAttendee({ userId, eventId, btn }) {
  try {
    const body = {
      userId,
      eventId
    };
    showLoading();
    const response = await API({ method: 'PUT', body, isJson: true, endpoint: 'events/toggleAttendee' });
    hideLoading();
    showAlert({ message: response.message, isSucces: true });
    btn.click();
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
