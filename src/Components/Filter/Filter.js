import { routes } from '../../Routes/routes';
import { categories } from '../../Utils/categories';
import { cities } from '../../Utils/cities';
import { navigate } from '../../Utils/navigate';

export function Filter(isAdmin = false) {
  const contentFilter = document.createElement('div');
  const search = document.createElement('input');
  const category = document.createElement('select');
  const ubi = document.createElement('select');
  const btnCreate = document.createElement('button');
  const todoUbiOption = document.createElement('option');
  const todoCategoryOption = document.createElement('option');

  todoCategoryOption.textContent = 'Selecciona...';
  todoUbiOption.textContent = 'Selecciona...';

  ubi.append(todoUbiOption);

  isAdmin ? contentFilter.append(search, category, ubi, btnCreate) : contentFilter.append(search, category, ubi);
  btnCreate.textContent = 'Crear Evento';

  categories.sort().forEach((cat) => {
    const option = document.createElement('option');
    option.textContent = cat;
    category.append(option);
  });

  cities.sort().forEach((city) => {
    const option = document.createElement('option');
    option.textContent = city;
    ubi.append(option);
  });

  category.append(todoCategoryOption);

  search.classList.add('border', 'border-[var(--e-color3)]', 'rounded-md', 'p-2', 'text-xs', 'dark:bg-[var(--e-color1)]', 'bg-[var(--e-color5)]', 'focus:outline-none', 'dark:focus:bg-[#0f172a]', 'focus:bg-[#ffff]', 'min-w-[120px]', 'max-w-[800px]', 'w-full');
  contentFilter.classList.add('w-full', 'flex', 'gap-5', 'items-center');
  btnCreate.classList.add('text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]');
  category.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full');
  ubi.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full');

  todoCategoryOption.disabled = true;
  todoCategoryOption.selected = true;
  todoUbiOption.disabled = true;
  todoUbiOption.selected = true;

  btnCreate.addEventListener('click', (e) => {
    navigate({event:e, route:routes[4]})
  })

  return contentFilter;
}
