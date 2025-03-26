export function FieldForm({ typeInput = 'text', labelText, ph, id }) {
  const fieldForm = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  fieldForm.classList.add('flex', 'flex-col', 'gap-1', 'relative');
  input.classList.add('border', 'rounded-md', 'p-2', 'text-xs', 'dark:bg-[#0f172a]', 'bg-[#ffff]', 'focus:outline-none', 'dark:focus:bg-[#0f172a]', 'focus:bg-[#ffff]', 'min-w-[120px]', 'w-full');
  label.classList.add('text-xs');
  label.textContent = labelText;
  label.htmlFor = id;
  input.placeholder = ph;
  input.type = typeInput;
  input.id = id;
  input.name = id;
  input.autocomplete = labelText;

  if (input.type === 'password') {
    const img = document.createElement('img');
    const imgLight = document.createElement('img');

    img.classList.add('dark:flex', 'hidden', 'w-[15px]', 'absolute', 'right-2', 'z-[9]', 'top-8', 'cursor-pointer');
    imgLight.classList.add('dark:hidden', 'flex', 'w-[15px]', 'absolute', 'right-2', 'z-[9]', 'top-8', 'cursor-pointer');
    img.src = '/icons/ojo-white.png';
    imgLight.src = '/icons/ojo.png';

    fieldForm.append(img, imgLight);

    img.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        img.src = '/icons/visibilidad-white.png';
      } else {
        input.type = 'password';
        input.autocomplete = 'current-password';
        img.src = '/icons/ojo-white.png';
      }
    });

    imgLight.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        imgLight.src = '/icons/visibilidad.png';
      } else {
        input.type = 'password';
        imgLight.src = '/icons/ojo.png';
      }
    });
  }

  fieldForm.append(label, input);
  return fieldForm;
}
