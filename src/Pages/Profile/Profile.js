import { ProfileCard } from '../../Components/ProfileCard/ProfileCard';
import { ProfileDashboardEvents } from '../../Components/ProfileDashboardEvents/ProfileDashboardEvents';

export async function Profile(params) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  const profile = document.createElement('section');
  const containerProfile = document.createElement('div');
  const user = JSON.parse(localStorage.getItem('user'));
  const profileCard = await ProfileCard({ id: user._id });
  const profileDashboardEvents = ProfileDashboardEvents();

  profile.classList.add('py-10', 'flex', 'justify-center','items-center');
  containerProfile.classList.add('container','flex', 'flex-col','justify-center','items-center','gap-20', 'lg:flex-row', 'lg:items-start', 'lg:justify-start');

  containerProfile.append(profileCard, profileDashboardEvents);
  profile.append(containerProfile);
  main.append(profile);
}
