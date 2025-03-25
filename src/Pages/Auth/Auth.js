import { FormLogin } from '../../Components/FormLogin/FormLogin';
import WelcomePanel from '../../Components/WelcomePanel/WelcomePanel';
import { switchAuthForm } from '../../Utils/switchAuthForm';
import { toggleAuthForm } from '../../Utils/toggleAuthForm';

export function Auth() {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  const auth = document.createElement('section');
  const contentForm = document.createElement('div');
  const contentButtons = document.createElement('div');
  const btnLogin = document.createElement('button');
  const btnRegister = document.createElement('button');
  const welcomePanel = WelcomePanel();

  btnLogin.textContent = 'Iniciar Sesión';
  btnRegister.textContent = 'Registrarse';

  auth.classList.add('flex', 'flex-col', 'justify-center', 'gap-20', 'items-center', 'px-5', 'py-20', 'max-w-[1200px]', 'm-auto', 'md:flex-row');
  contentForm.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'w-full');
  contentButtons.classList.add('flex', 'justify-center', 'items-center', 'gap-5', 'p-1', 'rounded-lg', 'mb-2', 'border', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
  btnLogin.classList.add('w-44', 'py-2', 'text-[#895cd6]', 'dark:text-white', 'text-xs');
  btnRegister.classList.add('w-44', 'py-2', 'text-black', 'dark:text-[#a1a1aa]', 'text-xs');

  contentButtons.append(btnLogin, btnRegister);
  contentForm.append(contentButtons, FormLogin());
  auth.append(contentForm, welcomePanel);
  main.append(auth);

  switchAuthForm({ btn1: btnLogin, btn2: btnRegister });
  toggleAuthForm({ btn1: btnLogin, btn2: btnRegister, contentForm });
}
