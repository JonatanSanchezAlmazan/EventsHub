import { registerUser } from '../../Services/Auth/registerUser';
import { FieldForm } from '../FieldForm/FieldForm';

export function FormRegister() {
  const form = document.createElement('form');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const name = FieldForm({ typeInput: 'text', labelText: 'Nombre', ph: 'Nombre', id: 'name' });
  const firstName = FieldForm({ typeInput: 'text', labelText: 'Apellido', ph: 'Apellido', id: 'firstName' });
  const email = FieldForm({ typeInput: 'email', labelText: 'Email', ph: 'dominio@dominio.com', id: 'email' });
  const password = FieldForm({ typeInput: 'password', labelText: 'Contraseña', ph: '********', id: 'password' });
  const ubi = FieldForm({ typeInput: 'text', labelText: 'Ubicación', ph: 'Ubicación', id: 'ubi' });
  const contentRol = document.createElement('div');
  const labelRol = document.createElement('label');
  const rol = document.createElement('select');
  const optionDefault = document.createElement('option');
  const optionUser = document.createElement('option');
  const optionOwner = document.createElement('option');
  const btn = document.createElement('button');
  const contentName = document.createElement('div');
  const contentCredentials = document.createElement('div');
  const contentInfo = document.createElement('div');
  const description = document.createElement('textarea');

  form.classList.add('flex', 'flex-col', 'gap-5', 'p-5', 'border', 'rounded-lg', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  title.classList.add('text-[20px]', 'font-black');
  text.classList.add('text-sm', 'text-black', 'dark:text-[#a1a1aa]');
  btn.classList.add('text-[14px]', 'bg-[#895cd6]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[#9b7ec9]');
  rol.classList.add('border', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[#0f172a]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full');
  contentRol.classList.add('flex', 'flex-col', 'gap-1', 'min-w-[120px]', 'max-w-[156px]', 'w-full');
  labelRol.classList.add('text-xs');
  btn.classList.add('text-xs');
  contentName.classList.add('flex', 'justify-between', 'gap-2');
  contentInfo.classList.add('flex', 'justify-between', 'gap-2');
  contentCredentials.classList.add('flex', 'justify-between', 'gap-2');
  description.classList.add('border', 'rounded-md', 'placeholder:text-xs', 'p-2', 'max-h-[150px]', 'resize-none', 'text-xs');

  form.id = 'formRegister';
  title.textContent = 'Crear Cuenta';
  text.textContent = 'Regístrate para comenzar a crear y gestionar eventos';
  btn.textContent = 'Crear Cuenta';
  labelRol.textContent = 'Rol';
  labelRol.htmlFor = 'rol';
  rol.name = 'rol';
  rol.id = 'rol';
  optionDefault.textContent = 'Selecciona un rol';
  optionDefault.selected = true;
  optionDefault.disabled = true;
  optionUser.textContent = 'Usuario';
  optionUser.value = 'user';
  optionOwner.textContent = 'Creador';
  optionOwner.value = 'owner';
  description.placeholder = 'Escribe una breve descripción';

  rol.append(optionDefault, optionUser, optionOwner);
  contentRol.append(labelRol, rol);
  contentName.append(name, firstName);
  contentCredentials.append(email, password);
  contentInfo.append(contentRol, ubi);

  form.append(title, text, contentName, contentCredentials, contentInfo, description, btn);
  registerUser({ form });
  return form;
}
