import { routes } from '../../Routes/routes';

import { getEvent } from '../../Services/Event/getEvent';
import { navigate } from '../../Utils/navigate';

export async function Event() {
  const id = localStorage.getItem('id');
  const event = await getEvent({ id: id });

  const main = document.querySelector('#main');
  main.innerHTML = '';
  const content = document.createElement('section');
  const contentEvents = document.createElement('div');
  const contentAttendees = document.createElement('div');
  const contentAvailablePlaces = document.createElement('div');
  const textPlaces = document.createElement('p');
  const numberPlaces = document.createElement('p');
  const contentListAttendees = document.createElement('div');
  const titleListAttendees = document.createElement('h3');
  const listAttendees = document.createElement('div');
  const progressBar = document.createElement('div');
  const filled = document.createElement('div');
  const btnAssist = document.createElement('button');

  contentEvents.classList.add('flex', 'flex-col', 'min-w-[300px]', 'max-w-[1000px]', 'lg:max-w-[1000px]', 'w-full', 'gap-5', 'border', 'rounded-md', 'p-10', 'border-[var(--e-color3)]');
  contentAttendees.classList.add('flex', 'flex-col', 'min-w-[300px]', 'max-w-[1000px]', 'lg:max-w-[400px]', 'w-full', 'gap-5', 'border', 'rounded-md', 'p-10', 'border-[var(--e-color3)]', 'max-h-[500px]');
  contentListAttendees.classList.add('flex', 'flex-col', 'w-full', 'gap-5', 'rounded-md');
  contentAvailablePlaces.classList.add('flex', 'gap-5', 'items-center');
  content.classList.add('container', 'flex', 'justify-between', 'pt-[60px]', 'pb-[60px]', 'flex-col', 'lg:flex-row', 'gap-10');
  progressBar.classList.add('w-full', 'rounded-full', 'h-[20px]', 'border', 'border-[var(--e-color3)]');
  filled.classList.add('h-full', 'bg-[var(--e-color7)]', 'rounded-l-full');
  listAttendees.classList.add('w-[300px]', 'h-[200px]', 'gap-5', 'flex', 'flex-col', 'border', 'border-[var(--e-color3)]', 'p-2', 'rounded-md');
  btnAssist.classList.add('text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'hidden', 'md:flex', 'transition-colors', 'hover:bg-[var(--e-color8)]', 'w-[100px]');

  const places = event.capacity - event.attendees.length;
  textPlaces.textContent = 'Plazas disponibles';
  numberPlaces.textContent = places;
  titleListAttendees.textContent = `Asistentes (${event.attendees.length})`;
  btnAssist.textContent = 'Asistir';

  contentEvents.innerHTML = `
  <button class='text-[12px] absolute top-[90px]' id="btnBack">Volver a eventos</button>
  <div class= 'w-full'>
    <img class='rounded-md' src='${event.image}'>
  </div>
  <div class='flex w-full p-2 justify-between'>
    <h2>${event.title}</h2>
    <p class='text-[12px] border border-[var(--e-color3)] p-1 rounded-md bg-[var(--e-color7)]'>${event.category}</p>
  </div>
  <p>Creado por ${event.idAuthor.name}</p>
  <div class='flex w-full justify-start  gap-5'>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[80px] max-w-[180px] md:min-w-[80px] md:max-w-[200px] w-full'>
      <p class='text-[12px]'t>Fecha: </p>
      <p class='text-[12px]'>${event.date}</p>
    </div>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[80px] max-w-[180px] md:min-w-[80px] md:max-w-[200px]  w-full '>
      <p class='text-[12px]'>Hora: </p>
      <p class='text-[12px]'>${event.startTime} - ${event.endTime}</p>
    </div>
  </div>
  <div class='flex w-full justify-start gap-5'>
    <div class='border p-5 rounded-md border-[var(--e-color3)] min-w-[80px] max-w-[180px] md:min-w-[80px] md:max-w-[200px] w-full'>
      <p class='text-[12px]'>Ubicación: </p>
      <p class='text-[12px]'>${event.direction}</p>
    </div>
    <div class='border p-5 rounded-md border-[var(--e-color3)] min-w-[80px] max-w-[180px] md:min-w-[80px] md:max-w-[200px] w-full'>
      <p class='text-[12px]'>Asistentes: </p>
      <p class='text-[12px]'>${event.attendees.length} de ${event.capacity}</p>
    </div>
  </div>
  <h3>Descripción: </h3>
  <p class='text-[12px]'>${event.description}</p>
  `;

  if (event.attendees.length === 0) {
    listAttendees.innerHTML = `<p>No hay asistentes todavía</p>`;
  } else {
    event.attendees.forEach((att) => {
      console.log(event);

      const attendee = document.createElement('div');
      const imgAttendee = document.createElement('img');
      const nameAttendee = document.createElement('p');
      imgAttendee.src = att.image;
      nameAttendee.textContent = event.attendees.name;

      imgAttendee.src = att.image;
      nameAttendee.textContent = att.name;

      attendee.classList.add('flex', 'gap-5', 'items-center');
      imgAttendee.classList.add('w-[30px]');
      nameAttendee.classList.add('text-[12px]');

      attendee.append(imgAttendee, nameAttendee);
      listAttendees.appendChild(attendee);
    });
  }

  progressBar.append(filled);
  contentListAttendees.append(titleListAttendees, listAttendees);
  contentAvailablePlaces.append(textPlaces, numberPlaces);
  contentAttendees.append(contentAvailablePlaces, progressBar, btnAssist, contentListAttendees);
  content.append(contentEvents, contentAttendees);
  main.append(content);

  const btnBack = document.querySelector('#btnBack');
  btnBack.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[0] });
  });

  const percentage = (event.attendees.length / event.capacity) * 100;

  filled.style.width = percentage + '%';
}
