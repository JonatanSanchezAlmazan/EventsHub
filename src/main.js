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

window.history.pushState('', '', '/');
window.addEventListener('popstate', () => {
  const route = routes.find((route) => route.href === window.location.pathname);
  route.page();
});
