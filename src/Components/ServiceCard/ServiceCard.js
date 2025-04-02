export function ServiceCard({ src, title, text }) {
  const card = document.createElement('div');
  card.classList.add('flex', 'flex-col', 'items-center','justify-center','md:h-[250px]','h-[180px]','lg:h-[180px]', 'gap-5', 'max-w-[500px]');
  card.innerHTML = `
    <div class ='flex items-center justify-center bg-[var(--e-color7)] w-12 h-12 rounded-full'>
      <img class='object-container' src = "${src}" alt= 'icon'/>
    </div>
    <h3 class= 'text-[18px] text-center'>${title}</h3>
    <p class='text-[16px] text-[var(--e-color2)] dark:text-[var(--e-color11)] text-center'>${text}</p>
  `;

  return card;
}
