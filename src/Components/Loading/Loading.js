import './Loading.css';

export function Loading() {
  const loading = document.createElement('div');
  const contentGif = document.createElement('div');
  const gif = document.createElement('img');

  loading.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-white', 'dark:bg-[#0f172a]');
  loading.id = 'loading-screen';
  contentGif.classList.add('w-[100px]', 'h-[100px]');
  gif.classList.add('w-full', 'object-fill');

  gif.src = '/icons/loading.gif';

  contentGif.appendChild(gif);
  loading.append(contentGif);

  return loading;
}
