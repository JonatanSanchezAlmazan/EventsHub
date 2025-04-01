import { events } from '../../Utils/events';
import { CardEvent } from '../CardEvent/CardEvent';

export function DashboardAttendees(params) {
  const content = document.createElement('div');
  const header = document.createElement('div');
  const title = document.createElement('h2');
  const contentEvents = document.createElement('div');

  title.textContent = 'Eventos a los que asisto';

  content.id = 'myEventAttendees';
  header.classList.add('mt-[30px]');
  contentEvents.classList.add('flex', 'gap-5', 'flex-wrap', 'p-5', 'justify-center');

  //!Meter los eventos a los que asisto
  events.forEach((event) => {
    CardEvent({ event, parentelement: contentEvents, isAdmin: false });
  });

  header.append(title);
  content.append(header, contentEvents);

  return content;
}
