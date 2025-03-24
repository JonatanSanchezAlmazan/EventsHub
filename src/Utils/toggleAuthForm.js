import { FormLogin } from '../Components/FormLogin/FormLogin';
import { FormRegister } from '../Components/FormRegister/FormRegister';

export function toggleAuthForm({ btn1, btn2, contentForm }) {
  btn1.addEventListener('click', () => {
    const form = document.querySelector('#formRegister');
    form.remove();
    contentForm.append(FormLogin());
  });

  btn2.addEventListener('click', () => {
    const form = document.querySelector('#formLogin');
    form.remove();
    contentForm.append(FormRegister());
  });
}
