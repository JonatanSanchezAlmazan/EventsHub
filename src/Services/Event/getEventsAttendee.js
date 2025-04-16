import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function getEventAttendee({ idUser }) {
  try {
    showLoading();
    const response = await API({ endpoint: `events/attendee/${idUser}` });
    hideLoading();
    return response.events;
  } catch (error) {
    hideLoading();
    showAlert({ message: error, isError: true });
  }
}
