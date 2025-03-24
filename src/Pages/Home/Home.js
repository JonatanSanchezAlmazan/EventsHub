import { MainBanner } from '../../Components/MainBanner/MainBanner';
import { MainInfo } from '../../Components/MainInfo/MainInfo';

export function Home(params) {
  const main = document.querySelector('#main');
  const home = document.createElement('section');
  home.classList.add('flex', 'flex-col', 'gap-20');
  home.append(MainBanner(), MainInfo());
  main.append(home);
}
