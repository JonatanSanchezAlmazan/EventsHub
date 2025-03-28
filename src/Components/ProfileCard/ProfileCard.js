import { getUser } from '../../Services/User/userProfile';
import { ProfileCardUpdate } from '../ProfileUpdateCard/ProfileUpdateCard';

export async function ProfileCard({ id }) {
  const user = await getUser({ id });

  const contentProfile = document.createElement('div');
  const headerProfile = document.createElement('div');
  const title = document.createElement('h2');
  const img = document.createElement('img');
  const imgLight = document.createElement('img');
  const sectionImage = document.createElement('section');
  const imageProfile = document.createElement('img');
  const nameUser = document.createElement('h2');
  const emailUser = document.createElement('p');
  const sectionInfo = document.createElement('section');
  const contentDescription = document.createElement('div');
  const descriptionUser = document.createElement('p');
  const imgUser = document.createElement('img');
  const imgUserWhite = document.createElement('img');
  const contentUbi = document.createElement('div');
  const imgUbi = document.createElement('img');
  const imgUbiWhite = document.createElement('img');
  const ubiUser = document.createElement('p');

  sectionInfo.append(contentDescription, contentUbi);
  contentDescription.append(imgUser, imgUserWhite, descriptionUser);
  contentUbi.append(imgUbi, imgUbiWhite, ubiUser);

  const { image, name, email, ubi, description, firstName } = user;

  title.textContent = 'Perfil';
  imageProfile.src = image;
  nameUser.textContent = `${name} ${firstName}`;
  emailUser.textContent = email;
  img.src = '/icons/editar.png';
  imgLight.src = '/icons/editar-white.png';
  descriptionUser.textContent = description;
  ubiUser.textContent = ubi;
  imgUser.src = '/icons/user.png';
  imgUserWhite.src = '/icons/user-white.png';
  imgUbi.src = '/icons/ubicacion.png';
  imgUbiWhite.src = '/icons/ubicacion-white.png';
  img.id = 'settings';
  imgLight.id = 'settingsWhite';
  contentProfile.id = 'containerProfile';

  headerProfile.classList.add('flex', 'justify-between', 'items-center');
  contentProfile.classList.add('flex', 'flex-col', 'gap-10', 'min-w-[300px]', 'max-w-[400px]', 'w-full', 'border', 'border-[var(--e-color3)]', 'p-5', 'rounded-md');
  sectionImage.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'gap-2', 'border-b', 'border-[var(--e-color3)]');
  imageProfile.classList.add('w-[100px]', 'h-[100px]');
  title.classList.add('text-[24px]');
  emailUser.classList.add('mb-[20px]', 'text-[14px]');
  img.classList.add('w-[20px]', 'h-[20px]', 'dark:hidden', 'flex', 'cursor-pointer');
  imgLight.classList.add('w-[20px]', 'h-[20px]', 'dark:flex', 'hidden', 'cursor-pointer');
  contentDescription.classList.add('flex', 'gap-1', 'items-center');
  imgUser.classList.add('w-[15px]', 'h-[15px]', 'dark:hidden', 'flex');
  imgUserWhite.classList.add('w-[15px]', 'h-[15px]', 'dark:flex', 'hidden');
  descriptionUser.classList.add('text-[14px]');
  imgUbi.classList.add('w-[15px]', 'h-[15px]', 'dark:hidden', 'flex');
  imgUbiWhite.classList.add('w-[15px]', 'h-[15px]', 'dark:flex', 'hidden');
  contentUbi.classList.add('flex', 'gap-1', 'items-center');
  ubiUser.classList.add('text-[14px]');
  sectionInfo.classList.add('flex', 'flex-col', 'gap-2');

  headerProfile.append(title, img, imgLight);
  sectionImage.append(imageProfile, nameUser, emailUser);
  sectionInfo.append(contentDescription, contentUbi);
  contentDescription.append(imgUser, imgUserWhite, descriptionUser);
  contentUbi.append(imgUbi, imgUbiWhite, ubiUser);
  contentProfile.append(headerProfile, sectionImage, sectionInfo);

  imgLight.addEventListener('click', () => {
    imgLight.remove();
    sectionImage.remove();
    sectionInfo.remove();
    const profileUpdateCard = ProfileCardUpdate({ user });
    contentProfile.append(profileUpdateCard);
  });

  img.addEventListener('click', () => {
    img.remove();
    sectionImage.remove();
    sectionInfo.remove();
    const profileUpdateCard = ProfileCardUpdate({ user });
    contentProfile.append(profileUpdateCard);
  });

  return contentProfile;
}
