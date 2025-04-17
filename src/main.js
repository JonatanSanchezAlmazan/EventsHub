import { FormLogin } from './Components/FormLogin/FormLogin';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { routes } from './Routes/routes';
import './style.css';
const app = document.querySelector('#app');
app.innerHTML = `
<header id = 'header'></header>
<main id ='main'></main>
`;
Header();
Home();
localStorage.removeItem('id');
localStorage.removeItem('user');

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

document.body.setAttribute('data-theme', systemTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});

window.history.pushState('', '', '/');
window.addEventListener('popstate', () => {
  const route = routes.find((route) => route.href === window.location.pathname);
  route.page();
});
