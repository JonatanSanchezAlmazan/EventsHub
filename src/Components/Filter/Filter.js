import { routes } from '../../Routes/routes';
import { categories } from '../../Utils/categories';
import { cities } from '../../Utils/cities';
import { handleFilterChange } from '../../Utils/handleFilterChange';
import { initializeSelectOption } from '../../Utils/initializeSelectOption';
import { navigate } from '../../Utils/navigate';
import { FilterMobile } from '../FilterMobile/FilterMobile';

export function Filter({ isAdmin = false, content }) {
  const contentFilter = document.createElement('div');
  const search = document.createElement('input');
  const category = document.createElement('select');
  const ubi = document.createElement('select');
  const btnCreate = document.createElement('button');
  const defaultUbiOption = document.createElement('option');
  const defaultCategoryOption = document.createElement('option');
  const todoUbiOptions = document.createElement('option');
  const todoCategoryOptions = document.createElement('option');
  const btnCreateMobile = document.createElement('button');
  const contentImgFilter = document.createElement('div');
  const imgFilter = document.createElement('img');

  defaultCategoryOption.textContent = 'Selecciona...';
  defaultUbiOption.textContent = 'Selecciona...';
  todoUbiOptions.textContent = 'Todo';
  todoCategoryOptions.textContent = 'Todo';
  imgFilter.src = '/icons/filtrar.png';

  ubi.append(defaultUbiOption, todoUbiOptions);
  category.append(defaultCategoryOption, todoCategoryOptions);
  contentImgFilter.append(imgFilter);
  isAdmin ? contentFilter.append(search, category, ubi, btnCreate, contentImgFilter, btnCreateMobile) : contentFilter.append(search, category, ubi, contentImgFilter);

  btnCreate.textContent = 'Crear Evento';
  btnCreateMobile.textContent = '+';
  search.placeholder = `Buscar Eventos`;

  search.classList.add('border', 'border-[var(--e-color3)]', 'rounded-md', 'p-2', 'text-xs', 'dark:bg-[var(--e-color1)]', 'bg-[var(--e-color5)]', 'focus:outline-none', 'dark:focus:bg-[var(--e-color01)]', 'focus:bg-[#ffff]', 'min-w-[80px]', 'max-w-[600px]', 'w-full');
  contentFilter.classList.add('w-full', 'flex', 'gap-5', 'items-center');
  btnCreate.classList.add('text-[12px]', 'bg-[var(--e-color7)]', 'px-8', 'py-2', 'text-[#000]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]', 'hidden', 'lg:flex');
  category.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full', 'hidden', 'md:flex');
  ubi.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors', 'min-w-[120px]', 'max-w-[156px]', 'w-full', 'hidden', 'md:flex');
  contentFilter.classList.add('flex', 'items-center', 'justify-center');
  btnCreateMobile.classList.add('text-[20px]', 'bg-[var(--e-color7)]', 'w-[40px]', 'h-[40px]', 'text-[var(--e-color05)]', 'rounded-md', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]', 'sm:flex', 'lg:hidden', 'flex', 'justify-center', 'items-center');
  contentImgFilter.classList.add('sm:flex', 'md:hidden', 'bg-[var(--e-color7)]', 'w-[40px]', 'h-[40px]', 'cursor-pointer', 'transition-colors', 'hover:bg-[var(--e-color8)]', 'rounded-md', 'flex', 'justify-center', 'items-center');
  imgFilter.classList.add('w-[15px]', 'h-[15px]');

  defaultCategoryOption.disabled = true;
  todoCategoryOptions.selected = true;
  defaultUbiOption.disabled = true;
  todoUbiOptions.selected = true;

  initializeSelectOption({ elements: categories, optionElem: category });
  initializeSelectOption({ elements: cities, optionElem: ubi });

  btnCreate.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[4] });
  });
  btnCreateMobile.addEventListener('click', (e) => {
    navigate({ event: e, route: routes[4] });
  });
  category.addEventListener('change', () => {
    handleFilterChange({ content, ubi, category, title: search.value });
  });
  ubi.addEventListener('change', () => {
    handleFilterChange({ content, ubi, category, title: search.value });
  });

  search.addEventListener('input', (e) => {
    handleFilterChange({ content, ubi, category, title: e.target.value });
  });

  contentImgFilter.addEventListener('click', () => {
    FilterMobile({ contentElement: content });
  });

  return contentFilter;
}
