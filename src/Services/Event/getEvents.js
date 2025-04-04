import { hideLoading } from '../../Utils/hideLoading';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export async function getEvents({ title = '', category = '', direction = '' }) {
  try {
    showLoading();
    const response = await API({ endpoint: `events/?title=${title}&category=${category}&direction=${direction}` });
    hideLoading();
    return response.events;
  } catch (error) {
    showAlert({ message: error, isError: true });
  }
}
