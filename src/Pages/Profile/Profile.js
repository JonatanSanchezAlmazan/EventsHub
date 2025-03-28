import { ProfileCard } from '../../Components/ProfileCard/ProfileCard';

export async function Profile(params) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  const profile = document.createElement('section');
  const containerProfile = document.createElement('div');
  const user = JSON.parse(localStorage.getItem('user'));
  const profileCard = await ProfileCard({ id: user._id });

  profile.classList.add('py-10');
  containerProfile.classList.add('container');

  containerProfile.append(profileCard);
  profile.append(containerProfile);
  main.append(profile);
}
