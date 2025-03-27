export default function WelcomePanel() {
  const welcomePanel = document.createElement('div');
  welcomePanel.classList.add('hidden', 'flex-col', 'justify-center', 'items-center', 'gap-5', 'p-10', 'rounded-lg', 'bg-[var(--e-color9)]', 'max-w-[500px]', 'min-w-[300px]', 'w-full', 'md:flex', 'm-auto');
  welcomePanel.innerHTML = `  
  <h3 class='text-[20px] font-extrabold text-[var(--e-color5)] ' >Bienvenido a EventsHub</h3>
  <p class='text-[14px] text-[var(--e-color5)] '>La plataforma perfecta para crear, gestionar y descubrir eventos. Únete a nuestra comunidad y comienza a organizar tus eventos hoy mismo.</p>
  <div class='flex items-center justify-center m-auto relative left-5'>
  <div class=' bg-[var(--e-color7)] w-10 h-10 rounded-full relative left-0 opacity-75 border'></div>
  <div class=' bg-[var(--e-color7)] w-10 h-10 rounded-full relative right-3 opacity-50 border'></div>
  <div class=' bg-[var(--e-color7)] w-10 h-10 rounded-full relative right-6 opacity-75 border'></div>
  <div class=' bg-[var(--e-color7)] w-10 h-10 rounded-full relative right-9 opacity-50 border'></div>
  <div class=' bg-[var(--e-color7)] w-10 h-10 rounded-full relative right-12 opacity-75 border'></div>
  </div>
  <p class='text-[14px] text-[var(--e-color5)] '>Únete a más de 10.000 usuarios</p>  
  `;

  return welcomePanel;
}
