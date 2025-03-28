import { FormLogin } from '../../Components/FormLogin/FormLogin';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import { switchAuthForm } from '../../Utils/switchAuthForm';
import { toggleAuthForm } from '../../Utils/toggleAuthForm';

export function Auth() {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  const auth = document.createElement('section');
  const containerAuth = document.createElement('div');
  const contentForm = document.createElement('div');
  const contentButtons = document.createElement('div');
  const btnLogin = document.createElement('button');
  const btnRegister = document.createElement('button');
  const welcomePanel = WelcomePanel();

  btnLogin.textContent = 'Iniciar Sesión';
  btnRegister.textContent = 'Registrarse';

  auth.classList.add('flex', 'flex-col');
  contentForm.classList.add('flex', 'flex-col', 'justify-start', 'items-start', 'w-full', 'bg-green');
  contentButtons.classList.add('flex', 'justify-center', 'items-center', 'gap-5', 'p-1', 'rounded-lg', 'mb-2', 'border', 'border-[var(--e-color3)]', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  btnLogin.classList.add('w-44', 'py-2', 'text-[#895cd6]', 'dark:text-white', 'text-xs');
  btnRegister.classList.add('w-44', 'py-2', 'text-black', 'dark:text-[#a1a1aa]', 'text-xs');
  containerAuth.classList.add('container', 'flex', 'flex-col', 'justify-between', 'gap-20', 'items-center', 'px-5', 'py-20', 'md:flex-row');

  contentButtons.append(btnLogin, btnRegister);
  contentForm.append(contentButtons, FormLogin());
  containerAuth.append(contentForm, welcomePanel);
  auth.append(containerAuth);
  main.append(auth);

  switchAuthForm({ btn1: btnLogin, btn2: btnRegister });
  toggleAuthForm({ btn1: btnLogin, btn2: btnRegister, contentForm });
}
