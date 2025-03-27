import { loginUser } from '../../Services/Auth/loginUser';
import { FieldForm } from '../FieldForm/FieldForm';

export function FormLogin() {
  const form = document.createElement('form');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const email = FieldForm({ typeInput: 'text', labelText: 'Email', ph: 'dominio@dominio.com', id: 'email' });
  const password = FieldForm({ typeInput: 'password', labelText: 'Contraseña', ph: '********', id: 'password' });
  const btn = document.createElement('button');

  form.id = 'formLogin';

  form.classList.add('flex', 'flex-col', 'gap-5', 'p-10', 'border', 'rounded-lg', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  title.classList.add('text-[20px]', 'font-black');
  text.classList.add('text-sm', 'text-black', 'dark:text-[var(--e-color3)]');
  btn.classList.add('text-[14px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[var(--e-color2)]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  btn.classList.add('text-xs');

  title.textContent = 'Iniciar Sesión';
  text.textContent = 'Ingresa tus credenciales para acceder a tu cuenta';
  btn.textContent = 'Iniciar Sesión';

  form.append(title, text, email, password, btn);
  loginUser({ form });
  return form;
}
