import { changeDateFormat } from '../../Utils/changeDateFormat';
import { formatTime } from '../../Utils/formatTime';
import { hideLoading } from '../../Utils/hideLoading';
import { isPastDate } from '../../Utils/isPastDate';
import { showAlert } from '../../Utils/showAlert';
import { showLoading } from '../../Utils/showLoading';
import { API } from '../API/API';

export function updateEvent({ form, pond, id }) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const [title, description, category, date, startTime, endTime, direction, capacity] = form;

    if (isPastDate(date.value)) {
      showAlert({ message: 'La fecha no puede ser anterior a la del día de hoy', isError: true });
      return;
    }

    const files = pond.getFiles();

    let image = null;

    if (files.length > 0) {
      image = files[0].file;
    }

    const newDate = changeDateFormat(date.value);
    const { newStartTime, newEndTime } = formatTime(startTime, endTime);

    const btnCancel = document.querySelector('#btnCancelUpdate');

    const formData = new FormData();
    if (title.value) formData.append('title', title.value);
    if (description.value) formData.append('description', description.value);
    if (category.value) formData.append('category', category.value);
    if (date.value) formData.append('date', newDate);
    if (startTime.value && endTime.value) {
      formData.append('startTime', newStartTime);
      formData.append('endTime', newEndTime);
    }
    if (direction.value) formData.append('direction', direction.value);
    if (capacity.value) formData.append('capacity', capacity.value);
    if (image) formData.append('image', image);

    try {
      showLoading();
      const response = await API({ method: 'PUT', endpoint: `events/${id}`, body: formData });
      hideLoading();
      showAlert({ message: response.message, isSucces: true });
      btnCancel.click();
    } catch (error) {
      hideLoading();
      showAlert({ message: error, isError: true });
    }
  });
}
