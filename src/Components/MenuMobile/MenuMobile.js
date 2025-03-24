import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';

export function MenuMobile({ parent }) {
  const contentImgMenu = document.createElement('div');
  const imgMenu = document.createElement('img');
  const imgMenuLight = document.createElement('img');
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    imgMenu.src = 'icons/cerrar-sesion-white.png';
    imgMenuLight.src = 'icons/cerrar-sesion.png';
    imgMenu.addEventListener('click', () => {
      localStorage.removeItem('user');
      //!Eliminar la cookie
      window.location.reload();
    });
    imgMenuLight.addEventListener('click', () => {
      localStorage.removeItem('user');
      //!Eliminar la cookie
      window.location.reload();
    });
  } else {
    imgMenuLight.src = 'icons/entrar-negro.png';
    imgMenu.src = 'icons/entrar.webp';
    imgMenu.addEventListener('click', (e) => navigate({ event: e, route: routes[1] }));
    imgMenuLight.addEventListener('click', (e) => navigate({ event: e, route: routes[1] }));
  }
  imgMenu.alt = 'icon login';
  imgMenu.classList.add('w-7', 'flex', 'md:hidden', 'cursor-pointer');
  imgMenuLight.classList.add('w-7', 'flex', 'md:hidden', 'dark:hidden', 'cursor-pointer');
  contentImgMenu.classList.add('flex', 'items-cemter');
  contentImgMenu.append(imgMenu, imgMenuLight);
  parent.append(contentImgMenu);
}
