import { loginUser } from '../../Services/Auth/loginUser';
import { FieldForm } from '../FieldForm/FieldForm';

export function FormLogin() {
  const form = document.createElement('form');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const email = FieldForm({ typeInput: 'email', labelText: 'Email', ph: 'dominio@dominio.com' });
  const password = FieldForm({ typeInput: 'password', labelText: 'Contraseña', ph: '********' });
  const btn = document.createElement('button');

  form.id = 'formLogin';

  form.classList.add('flex', 'flex-col', 'gap-5', 'p-10', 'border', 'rounded-lg', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  title.classList.add('text-[20px]', 'font-black');
  text.classList.add('text-sm', 'text-black', 'dark:text-[#a1a1aa]');
  btn.classList.add('text-[14px]', 'bg-[#895cd6]', 'dark:bg-[#fafafa]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[#decff4]', 'dark:hover:bg-[#a1a1aa]');
  btn.classList.add('text-xs');

  title.textContent = 'Iniciar Sesión';
  text.textContent = 'Ingresa tus credenciales para acceder a tu cuenta';
  btn.textContent = 'Iniciar Sesión';

  form.append(title, text, email, password, btn);
  loginUser({ form });
  return form;
}
