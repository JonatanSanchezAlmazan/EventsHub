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
  text.classList.add('text-[16px]', 'md:text-[20px]', 'max-w-[700px]', 'text-[var(--e-color2)]', 'dark:text-[var(--e-color3)]');
  contentBtnsMainBanner.classList.add('flex', 'gap-10', 'items-center');
  linkInit.classList.add('md:text-[14px]', 'text-[10px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-full', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  linkEvents.classList.add(
    'md:text-[14px]',
    'text-[10px]',
    'bg-[var(--e-color5)]',
    'dark:bg-[var(--e-color1)]',
    'px-8',
    'py-2',
    'text-[var(--e-color2)]',
    'dark:text-[var(--e-color5)]',
    'rounded-full',
    'cursor-pointer',
    'transition-colors',
    'hover:bg-[var(--e-color8)]',
    'border',
    'border-[var(--e-color3)]'
  );

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
