import { ProfileCard } from '../../Components/ProfileCard/ProfileCard';

export async function Profile(params) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  const profile = document.createElement('section');
  const user = JSON.parse(localStorage.getItem('user'));
  const profileCard = await ProfileCard({ id: user._id });

  profile.classList.add('p-10');

  profile.append(profileCard);
  main.append(profile);
}
