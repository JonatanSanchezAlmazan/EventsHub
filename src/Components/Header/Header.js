import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export function Header() {
  const header = document.querySelector('#header');
  header.innerHTML = '';
  const containerHeader = document.createElement('div');
  const logo = document.createElement('h2');
  const nav = document.createElement('nav');
  const linkEvents = document.createElement('a');
  const linkAuth = document.createElement('a');
  const profile = document.createElement('img');
  const profileLight = document.createElement('img');
  const user = JSON.parse(localStorage.getItem('user'));

  logo.textContent = 'EventsHub';
  linkEvents.textContent = 'Eventos';

  logo.classList.add('text-[20px]', 'cursor-pointer');
  linkEvents.classList.add('text-[14px]', 'cursor-pointer', 'hidden', 'md:flex', 'hover:text-[#895cd6]');
  linkAuth.classList.add('text-[14px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'hidden', 'md:flex', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  header.classList.add('p-5', 'bg-[var(--e-color5)]', 'dark:bg-[var(--e-color1)]', 'border-b', 'border-[var(--e-color3)]', 'sticky', 'top-0');
  nav.classList.add('flex', 'gap-20', 'items-center');
  profile.classList.add('w-6', 'flex', 'dark:hidden', 'cursor-pointer');
  profileLight.classList.add('w-6', 'hidden', 'dark:flex', 'cursor-pointer');
  containerHeader.classList.add('container', 'flex', 'items-center', 'justify-between');

  if (user) {
    profile.src = '/icons/usuario.png';
    profileLight.src = '/icons/usuario-white.png';
    profile.addEventListener('click', (e) => navigate({ event: e, route: routes[3] }));
    profileLight.addEventListener('click', (e) => navigate({ event: e, route: routes[3] }));
    linkAuth.textContent = 'Cerrar Sesión';
    linkAuth.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.reload();
      //!Eliminar la cookie
    });
  } else {
    linkAuth.textContent = 'Iniciar Sesión';
  }

  linkAuth.addEventListener('click', (e) => navigate({ event: e, route: routes[1] }));
  logo.addEventListener('click', (e) => navigate({ event: e, route: routes[2] }));
  linkEvents.addEventListener('click', (e) => navigate({ event: e, route: routes[0] }));

  nav.append(linkEvents, linkAuth);
  containerHeader.append(logo, nav, profile, profileLight);
  header.append(containerHeader);
  MenuMobile({ parent: containerHeader });

  return header;
}
