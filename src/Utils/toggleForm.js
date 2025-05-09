export function toggleForm({ btn1, btn2, content, id1, id2, component1, component2 }) {
  btn1.addEventListener('click', () => {
    const element = document.querySelector(`#${id2}`);
    element.remove();
    content.append(component1);
  });

  btn2.addEventListener('click', () => {
    const element = document.querySelector(`#${id1}`);
    element.remove();
    content.append(component2);
  });
}
