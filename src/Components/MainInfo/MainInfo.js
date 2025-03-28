import { ServiceCard } from '../ServiceCard/ServiceCard';

export function MainInfo() {
  const mainInfo = document.createElement('section');
  mainInfo.classList.add('flex', 'flex-col', 'gap-20', 'md:flex-row', 'px-5', 'py-5', 'items-center', 'justify-center');
  mainInfo.append(
    ServiceCard({ src: '/icons/cita-romantica.webp', title: 'Crea Eventos', text: 'Crea eventos personalizados con toda la información necesaria para tus asistentes' }),
    ServiceCard({ src: '/icons/comunidad.webp', title: 'Gestiona Asistentes', text: 'Controla quien asiste a yus eventos y mantén un registro de todos los participantes' }),
    ServiceCard({ src: '/icons/calendario.webp', title: 'Descubre Eventos', text: 'Explora eventos creados por otros usuarios y únete a los que te interesen.' })
  );
  return mainInfo;
}
