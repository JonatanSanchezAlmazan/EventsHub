import { getUser } from '../../Services/User/userProfile';

export async function ProfileCard({ id }) {
  const user = await getUser({ id });

  const contentProfile = document.createElement('div');
  const headerProfile = document.createElement('div');
  const title = document.createElement('h2');
  const img = document.createElement('img');
  const sectionImage = document.createElement('div');
  const imageProfile = document.createElement('img');
  const nameUser = document.createElement('h2');
  const emailUser = document.createElement('p');
  headerProfile.append(title, img);
  sectionImage.append(imageProfile, nameUser, emailUser);
  contentProfile.append(headerProfile, sectionImage);

  const { image, name, email, ubi, description, firstName } = user;

  title.textContent = 'Perfil';
  imageProfile.src = image;
  nameUser.textContent = `${name} ${firstName}`;
  emailUser.textContent = email;

  headerProfile.classList.add('flex');
  contentProfile.classList.add('flex', 'flex-col', 'gap-10', 'min-w-[300px]', 'max-w-[500px]', 'w-full', 'border', 'border-[var(--e-color3)]', 'p-10', 'rounded-md');
  sectionImage.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'gap-2', 'border-b', 'border-[var(--e-color3)]');
  imageProfile.classList.add('w-[100px]', 'h-[100px]');
  title.classList.add('text-[24px]');
  emailUser.classList.add('mb-[20px]', 'text-[14px]');

  return contentProfile;
}
