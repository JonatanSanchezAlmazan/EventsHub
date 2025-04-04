export function NoEventsMessage(params) {
  const content = document.createElement('div');
  content.innerHTML = `
  <img class= w-[40px] src='/icons/lupa.png' alt='icon lupa'>
  <h3>No se encontraron eventos</h3>
  <p>Intenta con otros filtros</p>
  
  `;
  content.classList.add('flex', 'flex-col', 'container', 'border', 'p-20', 'justify-center', 'items-center', 'border-[var(--e-color3)]', 'rounded-md', 'gap-5');

  return content;
}
