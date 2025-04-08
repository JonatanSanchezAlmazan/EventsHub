import { routes } from '../../Routes/routes';

import { getEvent } from '../../Services/Event/getEvent';
import { navigate } from '../../Utils/navigate';

export async function Event() {
  const id = localStorage.getItem('id');
  const event = await getEvent({ id: id });

  const main = document.querySelector('#main');
  main.innerHTML = '';
  const content = document.createElement('section');
  const btnBack = document.createElement('button');
  const contentEvents = document.createElement('div');
  btnBack.classList.add('mt-[20px]', 'mb-[20px]', 'text-[12px]');
  contentEvents.classList.add('flex', 'flex-col', 'min-w-[300px]', 'max-w-[800px]', 'w-full', 'pt-[20px]', 'pb-[20px]', 'gap-5');
  content.classList.add('container');
  contentEvents.innerHTML = `
  <div class= 'w-full '>
    <img class='rounded-md' src='${event.image}'>
  </div>
  <div class='flex w-full p-2 justify-between'>
    <h2>${event.title}</h2>
    <p class='text-[12px] border border-[var(--e-color3)] p-1 rounded-md bg-[var(--e-color7)]'>${event.category}</p>
  </div>
  <p>Creado por ${event.idAuthor.name}</p>
  <div class='flex w-full md:justify-between flex-wrap gap-5 justify-center'>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[120px] max-w-[330px] w-full'>
      <p class='text-[12px]'t>Fecha: </p>
      <p class='text-[12px]'>${event.date}</p>
    </div>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[120px] max-w-[330px] w-full '>
      <p class='text-[12px]'>Hora: </p>
      <p class='text-[12px]'>${event.startTime} - ${event.endTime}</p>
    </div>
  </div>
  <div class='flex w-full md:justify-between flex-wrap gap-5 justify-center'>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[120px] max-w-[330px] w-full '>
      <p class='text-[12px]'>Ubicación: </p>
      <p class='text-[12px]'>${event.direction}</p>
    </div>
    <div class=' border p-5 rounded-md border-[var(--e-color3)] min-w-[120px] max-w-[330px] w-full '>
      <p class='text-[12px]'>Asistentes: </p>
      <p class='text-[12px]'>${event.attendees.length} de ${event.capacity}</p>
    </div>
  </div>
  <h3>Descripción: </h3>
  <p class='text-[12px]'>${event.description}</p>
  
  `;

  btnBack.textContent = 'Volver a eventos';

  btnBack.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[0] });
  });

  content.append(btnBack, contentEvents);
  main.append(content);
}
