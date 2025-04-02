import { hideLoading } from "../../Utils/hideLoading";
import { showAlert } from "../../Utils/showAlert";
import { showLoading } from "../../Utils/showLoading";
import { API } from "../API/API";

export function newEvent({form, pond}) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const [title, description, category, date, startTime, endTime, direction, capacity] = form;

        const files = pond.getFiles();

        let image = null;

        if (files.length > 0) {
            image = files[0].file;
          }

           if (!image && title.value == '' && description.value == '' && category.value == '' && date.value == '' && startTime.value === '', endTime.value === '' && direction.value === '' && capacity.value === '') {
                showAlert({ message: 'Todos los campos son obligatorios', isError: true });
                return;
              }

              const btnCancel = document.querySelector('#btnCancelNewEvent');

        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('description', description.value);
        formData.append('category', category.value);
        formData.append('date', date.value);
        formData.append('startTime', startTime.value);
        formData.append('endTime', endTime.value);
        formData.append('direction', direction.value);
        formData.append('capacity', capacity.value);
        formData.append('image', image)

        try {
            showLoading();
            const response = await API({method:'POST', endpoint:'events/register', body:formData});
            hideLoading();
            showAlert({ message: response.message, isSucces: true });
            btnCancel.click();


        } catch (error) {
            hideLoading();
            showAlert({message:error, isError:true});
        }
        
        

    })
    
}