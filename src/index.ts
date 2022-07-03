import './styles/style.scss';
import Kingfisher from './images/kingfisher.avif';

function component() {
  const element = document.createElement('div');
  element.classList.add('element');

  element.textContent = 'Hello, World!';

  return element;
}

function image() {
  const img = document.createElement('img');
  img.src = Kingfisher;

  return img;
}

document.body.append(component(), image());
