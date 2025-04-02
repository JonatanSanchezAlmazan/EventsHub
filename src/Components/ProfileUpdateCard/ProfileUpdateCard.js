import * as FilePond from 'filepond';
import { registerPlugin } from 'filepond';
import 'filepond/dist/filepond.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import { FieldForm } from '../FieldForm/FieldForm';
import { navigate } from '../../Utils/navigate';
import { routes } from '../../Routes/routes';
import { updateUser } from '../../Services/User/updateUser';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

export function ProfileCardUpdate({ user, content }) {
  const contentForm = document.createElement('div');
  const changeImage = document.createElement('input');
  const contentImage = document.createElement('div');
  const imgUser = document.createElement('img');
  const form = document.createElement('form');
  const name = FieldForm({ typeInput: 'text', labelText: 'Nombre', ph: user.name, id: 'name' });
  const firstName = FieldForm({ typeInput: 'text', labelText: 'Apellido', ph: user.firstName, id: 'firstName' });
  const email = FieldForm({ typeInput: 'text', labelText: 'Email', ph: user.email, id: 'email' });
  const ubi = FieldForm({ typeInput: 'text', labelText: 'Ubicación', ph: user.ubi, id: 'ubi' });
  const contentDescription = document.createElement('div');
  const labelDescription = document.createElement('label');
  const description = document.createElement('textarea');
  const containerButtons = document.createElement('div');
  const btnSave = document.createElement('button');
  const btnCancel = document.createElement('button');

  imgUser.classList.add('w-24', 'h-24', 'rounded-full', 'border', 'shadow-md', 'object-cover');
  contentForm.classList.add('flex', 'flex-col', 'items-center', 'gap-5', 'p-2');
  contentImage.classList.add('flex', 'flex-col', 'items-center', 'gap-1', 'w-full');
  form.classList.add('w-full', 'flex', 'flex-col', 'gap-5');
  changeImage.classList.add('filepond');
  description.classList.add('border', 'border-[var(--e-color3)]', 'rounded-md', 'placeholder:text-xs', 'p-2', 'max-h-[150px]', 'resize-none', 'text-xs');
  contentDescription.classList.add('flex', 'flex-col', 'gap-1', 'relative');
  labelDescription.classList.add('text-sm');
  containerButtons.classList.add('w-full', 'flex', 'justify-between');
  btnSave.classList.add('text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'hidden', 'md:flex', 'transition-colors', 'hover:bg-[var(--e-color8)]');
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

  imgUser.src = user.image;
  imgUser.alt = 'Foto de perfil';
  changeImage.type = 'file';
  changeImage.name = 'filepond';
  description.placeholder = user.description;
  labelDescription.textContent = 'Descripción';
  btnSave.textContent = 'Guardar';
  btnCancel.textContent = 'Cancelar';
  btnSave.type = 'submit';
  btnCancel.id = 'btnCancel';

  containerButtons.append(btnSave, btnCancel);
  contentDescription.append(labelDescription, description);
  form.append(name, firstName, email, ubi, contentDescription, containerButtons);
  contentImage.append(imgUser, changeImage);
  contentForm.append(contentImage, form);

  FilePond.setOptions({
    credits: false
  });

  const pond = FilePond.create(changeImage, {
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],
    maxFileSize: '2MB',
    stylePanelLayout: 'integrated ',
    allowImagePreview: false,
    labelIdle: `
      <span style="font-size: 12px; width:200px; cursor:pointer; color:#aaaaae ;  font-weight: bold; border:1px solid #2d2d2e; padding:5px; border-radius:5px ">
        Cambiar Foto
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
      imgUser.src = URL.createObjectURL(file.file);
    }
  });

  btnCancel.addEventListener('click', (e) => {
    contentImage.remove();
    contentForm.remove();
    containerButtons.remove();
    navigate({ event: e, route: routes[3] });
  });

  updateUser({ form, id: user._id, pond: pond });

  return contentForm;
}
