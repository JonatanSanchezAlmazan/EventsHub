import { categories } from '../../Utils/categories';
import { cities } from '../../Utils/cities';
import { handleFilterChange } from '../../Utils/handleFilterChange';
import { initializeSelectOption } from '../../Utils/initializeSelectOption';

export function FilterMobile({ contentElement }) {
  const content = document.createElement('div');
  const title = document.createElement('h5');
  const subtitle = document.createElement('p');
  const labelCategory = document.createElement('label');
  const category = document.createElement('select');
  const labelUbi = document.createElement('label');
  const ubi = document.createElement('select');
  const defaultUbiOption = document.createElement('option');
  const defaultCategoryOption = document.createElement('option');
  const todoUbiOptions = document.createElement('option');
  const todoCategoryOptions = document.createElement('option');

  defaultCategoryOption.textContent = 'Selecciona...';
  defaultUbiOption.textContent = 'Selecciona...';
  todoUbiOptions.textContent = 'Todo';
  todoCategoryOptions.textContent = 'Todo';
  labelCategory.textContent = 'Categoria';
  labelUbi.textContent = 'Ubicación';
  title.textContent = 'Filtrar';
  subtitle.textContent = 'Ajusta los filtros para encontrar los eventos que te interesan';

  content.classList.add('absolute', 'top-0', 'right-[-20px]', 'flex', 'flex-col', 'w-[350px]', 'h-full', 'p-10', 'gap-5', 'bg-white', 'dark:bg-[var(--e-color1)]', 'border');
  category.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors');
  ubi.classList.add('border', 'border-[var(--e-color3)]', 'rounded-lg', 'p-2', 'text-xs', 'bg-white', 'dark:bg-[var(--e-color1)]', 'text-black', 'dark:text-white', 'cursor-pointer', 'transition-colors');

  defaultCategoryOption.disabled = true;
  todoCategoryOptions.selected = true;
  defaultUbiOption.disabled = true;
  todoUbiOptions.selected = true;

  ubi.append(defaultUbiOption, todoUbiOptions);
  category.append(defaultCategoryOption, todoCategoryOptions);

  initializeSelectOption({ elements: categories, optionElem: category });
  initializeSelectOption({ elements: cities, optionElem: ubi });

  category.addEventListener('change', () => {
    handleFilterChange({ content: contentElement, ubi, category });
  });
  ubi.addEventListener('change', () => {
    handleFilterChange({ content: contentElement, ubi, category });
  });

  content.append(title, subtitle, labelCategory, category, labelUbi, ubi);
  contentElement.append(content);
}
