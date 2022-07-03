import './styles/style.scss';

function component() {
  const element = document.createElement('div');
  element.classList.add('element');

  element.textContent = 'Hello, World!';

  return element;
}

document.body.appendChild(component());
