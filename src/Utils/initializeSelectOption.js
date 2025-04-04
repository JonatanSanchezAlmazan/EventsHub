export function initializeSelectOption({ elements, optionElem }) {
  elements.sort().forEach((cat) => {
    const option = document.createElement('option');
    option.textContent = cat;
    optionElem.append(option);
  });
}
