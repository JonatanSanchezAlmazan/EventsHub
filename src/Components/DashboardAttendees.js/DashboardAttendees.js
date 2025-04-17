import { CardEvent } from '../CardEvent/CardEvent';

export async function DashboardAttendees({ events }) {
  const content = document.createElement('div');
  const header = document.createElement('div');
  const title = document.createElement('h2');
  const contentEvents = document.createElement('div');

  title.textContent = 'Eventos a los que asisto';

  content.id = 'myEventAttendees';
  header.classList.add('mt-[30px]');
  contentEvents.classList.add('flex', 'gap-5', 'flex-wrap', 'p-5', 'justify-center', 'max-h-[600px]', 'overflow-y-auto', 'overflow-x-hidden', 'mt-10');

  events.forEach((event) => {
    CardEvent({ event, parentelement: contentEvents, isAdmin: false });
  });

  header.append(title);
  content.append(header, contentEvents);

  return content;
}
