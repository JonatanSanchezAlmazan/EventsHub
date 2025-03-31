export function switchForm({ btn1, btn2 }) {
  btn1.addEventListener('click', () => {
    btn1.classList.replace('text-black', 'text-[#895cd6]');
    btn1.classList.replace('dark:text-[#a1a1aa]', 'dark:text-white');

    btn2.classList.replace('text-[#895cd6]', 'text-black');
    btn2.classList.replace('dark:text-white', 'dark:text-[#a1a1aa]');
  });

  btn2.addEventListener('click', () => {
    btn2.classList.replace('text-black', 'text-[#895cd6]');
    btn2.classList.replace('dark:text-[#a1a1aa]', 'dark:text-white');

    btn1.classList.replace('text-[#895cd6]', 'text-black');
    btn1.classList.replace('dark:text-white', 'dark:text-[#a1a1aa]');
  });
}
