import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';
import { CardEvent } from '../CardEvent/CardEvent';

export async function DashboardEvents({ events }) {
  const content = document.createElement('div');
  const header = document.createElement('div');
  const title = document.createElement('h2');
  const btnCreateEvent = document.createElement('button');
  const contentEvents = document.createElement('div');

  title.textContent = 'Mis Eventos';
  btnCreateEvent.textContent = 'Crear Evento';
  content.id = 'myEvents';
  header.classList.add('flex', 'justify-between', 'items-center', 'w-full', 'mt-[30px]');
  btnCreateEvent.classList.add('text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  contentEvents.classList.add('flex', 'gap-5', 'flex-wrap', 'p-5', 'justify-center', 'max-h-[500px]', 'overflow-y-auto', 'mt-10');

  if (events.length === 0) {
    contentEvents.innerHTML = `
    <p>No tienes eventos todavía</p>
    `;
  }

  events.forEach((event) => {
    CardEvent({ event, parentelement: contentEvents, isAdmin: true });
  });

  header.append(title, btnCreateEvent);
  content.append(header, contentEvents);

  btnCreateEvent.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[4] });
  });

  return content;
}
