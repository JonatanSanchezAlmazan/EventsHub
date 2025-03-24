import { FieldForm } from '../FieldForm/FieldForm';

export function FormRegister() {
  const form = document.createElement('form');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const name = FieldForm({ typeInput: 'text', labelText: 'Nombre', ph: 'Nombre' });
  const email = FieldForm({ typeInput: 'email', labelText: 'Email', ph: 'dominio@dominio.com' });
  const password = FieldForm({ typeInput: 'password', labelText: 'Contraseña', ph: '********' });
  const contentRol = document.createElement('div');
  const labelRol = document.createElement('label');
  const rol = document.createElement('select');
  const optionDefault = document.createElement('option');
  const optionUser = document.createElement('option');
  const optionOwner = document.createElement('option');
  const btn = document.createElement('button');

  form.id = 'formRegister';

  form.classList.add('flex', 'flex-col', 'gap-5', 'p-10', 'border', 'rounded-lg', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  title.classList.add('text-[20px]', 'font-black');
  text.classList.add('text-sm', 'text-black', 'dark:text-[#a1a1aa]');
  btn.classList.add('text-[14px]', 'bg-[#895cd6]', 'dark:bg-[#fafafa]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[#decff4]', 'dark:hover:bg-[#a1a1aa]');
  rol.classList.add('border', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-gray-900', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors');
  contentRol.classList.add('flex', 'flex-col', 'gap-1');
  labelRol.classList.add('text-xs');
  btn.classList.add('text-xs');

  title.textContent = 'Crear Cuenta';
  text.textContent = 'Regístrate para comenzar a crear y gestionar eventos';
  btn.textContent = 'Crear Cuenta';
  labelRol.textContent = 'Rol';
  rol.name = 'rol';
  optionDefault.textContent = 'Selecciona un rol';
  optionDefault.selected = true;
  optionDefault.disabled = true;
  optionUser.textContent = 'Usuario';
  optionUser.value = 'user';
  optionOwner.textContent = 'Propietario';
  optionOwner.value = 'owner';

  rol.append(optionDefault, optionUser, optionOwner);
  contentRol.append(labelRol, rol);

  form.append(title, text, name, email, password, contentRol, btn);
  return form;
}
