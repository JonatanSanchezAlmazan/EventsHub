import { routes } from '../../Routes/routes';
import { navigate } from '../../Utils/navigate';

export function CardEvent({ event, isAdmin = false, parentelement, isEvent = false }) {
  const card = document.createElement('div');
  const contentImg = document.createElement('div');
  const img = document.createElement('img');
  const headercard = document.createElement('div');
  const name = document.createElement('h3');
  const category = document.createElement('p');
  const infoCard = document.createElement('div');
  const day = document.createElement('p');
  const schedule = document.createElement('p');
  const direction = document.createElement('p');
  const numAttendees = document.createElement('p');
  const contentBtns = document.createElement('div');
  const viewDetail = document.createElement('a');
  const btnEdit = document.createElement('button');
  const btnRemove = document.createElement('button');

  card.classList.add('min-w-[300px]', 'max-w-[380px]', 'w-full', 'border', 'p-5', 'border-[var(--e-color3)]', 'rounded-md', 'flex', 'flex-col', 'gap-5');
  name.classList.add('text-[14px]', 'font-bold');
  day.classList.add('text-[14px]');
  schedule.classList.add('text-[14px]');
  direction.classList.add('text-[14px]');
  numAttendees.classList.add('text-[14px]');
  category.classList.add('text-[12px]', 'border', 'border-[var(--e-color3)]', 'p-1', 'rounded-md');
  headercard.classList.add('flex', 'justify-between', 'items-center');
  contentBtns.classList.add('flex', 'gap-3');
  viewDetail.classList.add('text-[12px]', 'border', 'border-[var(--e-color3)]', 'p-2', 'rounded-md', 'cursor-pointer');
  btnEdit.classList.add('text-[12px]', 'border', 'border-[var(--e-color3)]', 'p-2', 'rounded-md');
  btnRemove.classList.add('text-[12px]', 'p-2', 'rounded-md', 'bg-[var(--e-color6)]', 'text-white');
  contentImg.classList.add('w-full', 'h-[220px]');
  img.classList.add('rounded-md', 'object-cover', 'w-full', 'h-full');

  isEvent && category.classList.add('bg-[var(--e-color7)]');
  isEvent && card.classList.add('cursor-pointer');

  img.src = event.image;
  name.textContent = event.title;
  category.textContent = event.category;
  day.textContent = 'Día: ' + event.date;
  schedule.textContent = 'Empieza: ' + event.startTime + ' Acaba: ' + event.endTime;
  direction.textContent = 'Dirección: ' + event.direction;
  numAttendees.textContent = 'Asistentes: ' + event.attendees.length + ' de ' + event.capacity;
  viewDetail.text = 'Ver Detalle';
  btnEdit.textContent = 'Editar';
  btnRemove.textContent = 'Eliminar';

  contentBtns.append(viewDetail, btnEdit, btnRemove);
  contentImg.append(img);
  headercard.append(name, category);
  infoCard.append(day, schedule, direction, numAttendees);
  if (isAdmin) {
    card.append(contentImg, headercard, infoCard, contentBtns);
  } else {
    card.append(contentImg, headercard, infoCard);
  }

  card.addEventListener('click', (e) => {
    localStorage.setItem('id', event._id);

    navigate({ event: e, route: routes[5] });
  });

  parentelement.append(card);
}
