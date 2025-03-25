export function AlertForm({ message }) {
  const alert = document.createElement('div');
  const textAletrt = document.createElement('p');

  alert.id = 'alert';
  alert.classList.add('flex', 'items-center', 'justify-center', 'text-[14px]', 'w-full');

  textAletrt.textContent = message;

  alert.append(textAletrt);

  return alert;
}
