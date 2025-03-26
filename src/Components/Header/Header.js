import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export function Header() {
  const header = document.querySelector('#header');
  header.innerHTML = '';
  const logo = document.createElement('h2');
  const nav = document.createElement('nav');
  const linkEvents = document.createElement('a');
  const linkAuth = document.createElement('a');
  const user = JSON.parse(localStorage.getItem('user'));

  logo.textContent = 'EventsHub';
  linkEvents.textContent = 'Eventos';

  logo.classList.add('text-[20px]', 'cursor-pointer');
  linkEvents.classList.add('text-[14px]', 'cursor-pointer', 'hidden', 'md:flex', 'hover:text-[#895cd6]');
  linkAuth.classList.add('text-[14px]', 'bg-[#895cd6]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'hidden', 'md:flex', 'transition-colors', 'hover:bg-[#9b7ec9]');
  header.classList.add('flex', 'items-center', 'justify-between', 'p-5', 'bg-[#fafafa]', 'dark:bg-[#0f172a]', 'border-b', 'border-[#a1a1aa]', 'sticky', 'top-0');
  nav.classList.add('flex', 'gap-20', 'items-center');

  if (user) {
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
  header.append(logo, nav);
  MenuMobile({ parent: header });

  return header;
}
