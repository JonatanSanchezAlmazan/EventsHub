import { CardEvent } from '../../Components/CardEvent/CardEvent';
import { Filter } from '../../Components/Filter/Filter';
import { events } from '../../Utils/events';

export function Events(params) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  const sectionEvents = document.createElement('section');
  const title = document.createElement('h2');
  const subtitle = document.createElement('p');
  const contentFilter = document.createElement('div');
  const contentEvents = document.createElement('div');
  const user = JSON.parse(localStorage.getItem('user'));
  let filter = '';
  if (user.rol === 'owner') {
    filter = Filter({ isAdmin: true });
  } else {
    filter = Filter();
  }

  sectionEvents.classList.add('container', 'flex', 'flex-col', 'gap-5', 'pt-10', 'pb-10');
  title.classList.add('text-[30px]');
  subtitle.classList.add('text-[16px]', 'dark:text-[var(--e-color11)]', 'text-[var(--e-color2)]');
  contentEvents.classList.add('flex', 'flex-wrap', 'gap-5', 'justify-center', 'items-center');

  title.textContent = 'Explorar Eventos';
  subtitle.textContent = 'Descubre eventos interesantes y unete a ellos';

  contentFilter.append(filter);
  sectionEvents.append(title, subtitle, contentFilter, contentEvents);
  events.forEach((event) => {
    CardEvent({ event, parentelement: contentEvents, isAdmin: false, isEvent: true });
  });

  main.append(sectionEvents);
}
