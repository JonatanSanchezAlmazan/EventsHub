export function Event({ event }) {
  console.log(event);

  const main = document.querySelector('#main');
  main.innerHTML = '';
  const content = document.createElement('section');
  const btnBack = document.createElement('button');
  const contentEvents = document.createElement('div');
  btnBack.classList.add('mt-[20px]', 'mb-[20px]', 'text-[12px]');
  contentEvents.classList.add('flex', 'flex-col', 'min-w-[300px]', 'max-w-[800px]', 'w-full', 'gap-5');
  content.classList.add('container');
  contentEvents.innerHTML = `
  <div class= 'w-full'>
    <img src='${event.image}'>
  </div>
  <div>
    <h2>${event.title}</h2>
    <p>${event.category}</p>
  </div>
  <p>Creado por ${event.idAuthor.name}</p>
  <div>
    <div>
      <p>Fecha</p>
      <p>${event.date}</p>
    </div>
    <div>
      <p>Hora</p>
      <p>${event.startTime} - ${event.endTime}</p>
    </div>
  </div>
  <div>
    <div>
      <p>Ubicación</p>
      <p>${event.direction}</p>
    </div>
    <div>
      <p>Asistentes</p>
      <p>${event.attendees.length} de ${event.capacity}</p>
    </div>
  </div>
  <h3>Descripción</h3>
  <p>${event.description}</p>
  
  `;

  btnBack.textContent = 'Volver a eventos';

  content.append(btnBack, contentEvents);
  main.append(content);
}
