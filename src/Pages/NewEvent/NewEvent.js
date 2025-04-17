import * as FilePond from 'filepond';
import { registerPlugin } from 'filepond';
import 'filepond/dist/filepond.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import { FieldForm } from '../../Components/FieldForm/FieldForm';
import { categories } from '../../Utils/categories';
import { newEvent } from '../../Services/Event/newEvent';
import { navigate } from '../../Utils/navigate';
import { routes } from '../../Routes/routes';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

export function NewEvent(params) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  const sectionNewEvent = document.createElement('section');
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const titleForm = document.createElement('h3');
  const subtitleForm = document.createElement('p');
  const titleEvent = FieldForm({ typeInput: 'text', labelText: 'Titulo del evento*', ph: 'Titulo del evento', id: 'titleEvent' });
  const contentDescription = document.createElement('div');
  const labelDescription = document.createElement('label');
  const description = document.createElement('textarea');
  const contentCategoryAndDate = document.createElement('div');
  const contentCategory = document.createElement('div');
  const category = document.createElement('select');
  const labelCategory = document.createElement('label');
  const date = FieldForm({ typeInput: 'date', labelText: 'Fecha*', ph: 'Seleccione la fecha', id: 'date' });
  const contentSchedule = document.createElement('div');
  const startTime = FieldForm({ typeInput: 'time', labelText: 'Hora de inicio*', id: 'startTime' });
  const endTime = FieldForm({ typeInput: 'time', labelText: 'Hora de finalización*', id: 'endTime' });
  const direction = FieldForm({ typeInput: 'text', labelText: 'Dirección*', ph: 'Direccón donde será el evento', id: 'direction' });
  const capacity = FieldForm({ typeInput: 'number', labelText: 'Número máximo de asistentes*', ph: '50', id: 'capacity' });
  const todoCategoryOption = document.createElement('option');
  const contentBtns = document.createElement('div');
  const btnCancel = document.createElement('button');
  const btnCreate = document.createElement('button');
  const changeImage = document.createElement('input');
  const contentImage = document.createElement('div');
  const img = document.createElement('img');

  sectionNewEvent.classList.add('container', 'pt-5', 'pb-5', 'flex', 'flex-col', 'gap-5');
  title.classList.add('text-[24px]');
  form.classList.add('border', 'border-[var(--e-color3)]', 'p-5', 'rounded-md', 'flex', 'flex-col', 'gap-5', 'min-w-[300px]', 'max-w-[600px]', 'w-full');
  subtitleForm.classList.add('text-[14px]', 'text-black', 'dark:text-[var(--e-color11)]');
  contentCategoryAndDate.classList.add('flex', 'justify-center', 'items-center', 'gap-5');
  contentSchedule.classList.add('flex', 'justify-center', 'items-center', 'gap-5');
  category.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full');
  date.classList.add('w-full');
  startTime.classList.add('w-full');
  endTime.classList.add('w-full');
  labelCategory.classList.add('text-[14px]');
  labelDescription.classList.add('text-[14px]');
  contentDescription.classList.add('flex', 'flex-col', 'gap-2');
  contentCategory.classList.add('flex', 'flex-col', 'gap-1');
  description.classList.add('border', 'border-[var(--e-color3)]', 'rounded-md', 'placeholder:text-xs', 'p-2', 'max-h-[300px]', 'resize-none', 'text-xs');
  btnCancel.classList.add(
    'md:text-[12px]',
    'text-[10px]',
    'bg-[var(--e-color5)]',
    'dark:bg-[var(--e-color1)]',
    'px-8',
    'py-2',
    'text-[var(--e-color2)]',
    'dark:text-[var(--e-color5)]',
    'rounded-md',
    'cursor-pointer',
    'transition-colors',
    'hover:bg-[var(--e-color8)]',
    'border',
    'border-[var(--e-color3)]'
  );
  btnCreate.classList.add('text-[10px]', 'md:text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  contentBtns.classList.add('flex', 'justify-between', 'gap-5');

  title.textContent = 'Crea Nuevo Evento';
  titleForm.textContent = 'Información del evento';
  subtitleForm.textContent = 'Completa los detalles de tu evento';
  labelCategory.textContent = 'Categoria*';
  labelDescription.textContent = 'Descripción';
  description.placeholder = 'Descripción del evento';
  todoCategoryOption.textContent = 'Selecciona...';
  btnCancel.textContent = 'Cancelar';
  btnCreate.textContent = 'Crear Evento';
  btnCancel.id = 'btnCancelNewEvent';

  sectionNewEvent.append(title, form);
  contentDescription.append(labelDescription, description);
  contentCategory.append(labelCategory, category);
  contentSchedule.append(startTime, endTime);
  contentCategoryAndDate.append(contentCategory, date);
  contentBtns.append(btnCancel, btnCreate);
  form.append(titleForm, subtitleForm, titleEvent, contentDescription, contentCategoryAndDate, contentSchedule, direction, capacity, contentImage, contentBtns);
  category.append(todoCategoryOption);
  contentImage.append(img, changeImage);

  categories.sort().forEach((cat) => {
    const option = document.createElement('option');
    option.textContent = cat;
    category.append(option);
  });

  todoCategoryOption.disabled = true;
  todoCategoryOption.selected = true;

  FilePond.setOptions({
    credits: false
  });

  const pond = FilePond.create(changeImage, {
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],
    maxFileSize: '5MB',
    stylePanelLayout: 'integrated ',
    allowImagePreview: false,
    labelIdle: `
          <span style="font-size: 12px; width:200px; cursor:pointer; color:#aaaaae ;  font-weight: bold; border:1px solid #2d2d2e; padding:5px; border-radius:5px ">
           Insertar Imagen
          </span>
        `,
    allowDrop: true,
    dropOnPage: true,
    dropValidation: true
  });

  let fileForm;

  pond.on('addfile', (error, file) => {
    if (file) {
      fileForm = file.file;
      img.src = URL.createObjectURL(file.file);
    }
  });

  btnCreate.addEventListener('click', () => {
    newEvent({ form, pond });
  });

  btnCancel.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[3] });
  });

  main.append(sectionNewEvent);
}
