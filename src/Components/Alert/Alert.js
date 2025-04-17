export function Alert({ message, isError = false, isSucces = false }) {
  const alert = document.createElement('div');
  const textAletrt = document.createElement('p');

  alert.id = 'alert';
  if (isError) {
    alert.classList.add('fixed', 'left-5', 'p-3', 'top-22', 'flex', 'items-center', 'justify-center', 'text-[12px]', 'w-full', 'text-white', 'bg-[var(--e-color6)]', 'max-w-[325px]', 'rounded-md', 'opacity-0', 'translate-x-[-50px]', 'transition-all', 'duration-500', 'p-2');
  } else if (isSucces) {
    alert.classList.add('fixed', 'left-5', 'top-22', 'flex', 'items-center', 'justify-center', 'text-[12px]', 'w-full', 'text-white', 'bg-[var(--e-color10)]', 'max-w-[325px]', 'rounded-md', 'h-[50px]', 'opacity-0', 'translate-x-[-50px]', 'transition-all', 'duration-500', 'p-2');
  }

  textAletrt.textContent = message;

  alert.append(textAletrt);
  setTimeout(() => {
    alert.classList.remove('opacity-0', 'translate-x-[-50px]');
    alert.classList.add('opacity-100', 'translate-x-0');
  }, 100);

  return alert;
}
