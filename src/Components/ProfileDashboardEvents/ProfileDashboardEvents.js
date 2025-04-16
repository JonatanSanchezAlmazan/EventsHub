import { getEventAttendee } from '../../Services/Event/getEventsAttendee';
import { getEventsByAuthor } from '../../Services/Event/getEventsByAuthor';
import { switchForm } from '../../Utils/switchForm';
import { toggleForm } from '../../Utils/toggleForm';
import { DashboardAttendees } from '../DashboardAttendees.js/DashboardAttendees';
import { DashboardEvents } from '../DashboardEvents/DasboardEvents';

export async function ProfileDashboardEvents(params) {
  const content = document.createElement('section');
  const contentButtons = document.createElement('div');
  const btnMyEvents = document.createElement('button');
  const btnEventAttendes = document.createElement('button');
  const contentEvents = document.createElement('div');
  const contentEventAttendees = document.createElement('div');
  const user = JSON.parse(localStorage.getItem('user'));
  const idAuthor = user._id;
  const events = await getEventsByAuthor({ idAuthor });
  const eventsAttendee = await getEventAttendee({ idUser: idAuthor });

  const dashboardEvents = await DashboardEvents({ events });
  const dashboardAttendees = await DashboardAttendees({ events: eventsAttendee });

  if (user.rol === 'owner') {
    btnMyEvents.textContent = 'Mis Eventos';
    btnEventAttendes.textContent = 'Asistencia';

    content.classList.add('w-full');
    btnMyEvents.classList.add('w-44', 'py-2', 'text-[#895cd6]', 'dark:text-white', 'text-xs');
    btnEventAttendes.classList.add('w-44', 'py-2', 'text-black', 'dark:text-[#a1a1aa]', 'text-xs');
    contentButtons.classList.add('flex', 'justify-center', 'items-center', 'gap-5', 'p-1', 'rounded-lg', 'mb-2', 'border', 'border-[var(--e-color3)]', 'w-full', 'min-w-[300px]', 'max-w-[400px]');
    contentEvents.classList.add('w-full');

    contentButtons.append(btnMyEvents, btnEventAttendes);
    contentEvents.append(dashboardEvents);

    content.append(contentButtons, contentEvents);

    switchForm({ btn1: btnMyEvents, btn2: btnEventAttendes });
    toggleForm({ btn1: btnMyEvents, btn2: btnEventAttendes, content: content, id1: 'myEvents', id2: 'myEventAttendees', component1: dashboardEvents, component2: dashboardAttendees });
  } else {
    contentButtons.append(btnEventAttendes);
    contentEventAttendees.append(dashboardAttendees);
    content.append(contentButtons, contentEventAttendees);
  }

  return content;
}
