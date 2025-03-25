export function FieldForm({ typeInput = 'text', labelText, ph }) {
  const fieldForm = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  fieldForm.classList.add('flex', 'flex-col', 'gap-1', 'relative');
  input.classList.add('border', 'rounded-lg', 'p-2', 'text-xs');
  label.classList.add('text-xs');
  label.textContent = labelText;
  input.placeholder = ph;
  input.type = typeInput;

  if (input.type === 'password') {
    const img = document.createElement('img');
    const imgLight = document.createElement('img');

    img.classList.add('dark:flex', 'hidden', 'w-[20px]', 'absolute', 'right-2', 'z-[9]', 'top-7', 'cursor-pointer');
    imgLight.classList.add('dark:hidden', 'flex', 'w-[20px]', 'absolute', 'right-2', 'z-[9]', 'top-7', 'cursor-pointer');
    img.src = '/icons/ojo-white.png';
    imgLight.src = '/icons/ojo.png';

    fieldForm.append(img, imgLight);

    img.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        img.src = '/icons/visibilidad-white.png';
      } else {
        input.type = 'password';
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
