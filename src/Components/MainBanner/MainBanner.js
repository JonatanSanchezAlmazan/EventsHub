import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';

export function MainBanner() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const mainbanner = document.createElement('section');
  const titlePage = document.createElement('h1');
  const text = document.createElement('p');
  const contentBtnsMainBanner = document.createElement('div');
  const linkInit = document.createElement('a');
  const linkEvents = document.createElement('a');
  const user = localStorage.getItem('user');

  mainbanner.classList.add('flex', 'flex-col', 'items-center', 'gap-10', 'px-5', 'py-10', 'w-full', 'text-center');
  titlePage.classList.add('text-[30px]', 'md:text-[48px]');
  text.classList.add('text-[16px]', 'md:text-[20px]', 'max-w-[700px]', 'text-[#09090b]', 'dark:text-[#a1a1aa]');
  contentBtnsMainBanner.classList.add('flex', 'gap-10', 'items-center');
  linkInit.classList.add('md:text-[14px]', 'text-[10px]', 'bg-[#895cd6]', 'px-8', 'py-2', 'text-[#000]', 'rounded-full', 'cursor-pointer', 'transition-colors', 'hover:bg-[#9b7ec9]');
  linkEvents.classList.add('md:text-[14px]', 'text-[10px]', 'bg-[#fafafa]', 'dark:bg-[#0f172a]', 'px-8', 'py-2', 'text-[#000]', 'dark:text-[#fff]', 'rounded-full', 'cursor-pointer', 'transition-colors', 'hover:bg-[#9b7ec9]', 'border', 'border-[#b5b5b5]');

  titlePage.textContent = 'Crea y Gestiona tus Eventos con Facilidad';
  text.textContent = 'La plataforma perfecta para organizar eventos, invitar asistentes y gestionar todo en su lugar.';
  linkInit.textContent = 'Comenzar Ahora';
  linkEvents.textContent = 'Ver Eventos';

  linkInit.addEventListener('click', (e) => navigate({ event: e, route: routes[1] }));
  linkEvents.addEventListener('click', (e) => navigate({ event: e, route: routes[0] }));

  if (user) {
    contentBtnsMainBanner.appendChild(linkEvents);
  } else {
    contentBtnsMainBanner.append(linkInit, linkEvents);
  }

  mainbanner.append(titlePage, text, contentBtnsMainBanner);
  return mainbanner;
}
