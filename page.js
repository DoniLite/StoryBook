import { article } from './article.js';


const closer = document.querySelector('#closer');
const rider = document.querySelector('#rider');
const navContainer = document.querySelector('#navContainer');
const navList = document.querySelector('#navList');
const defaultContainer = document.querySelector('#parsedContent');

window.onload = async () => {
  Object.keys(article).forEach((key) => {
    navList.insertAdjacentHTML(
      'beforeend',
      `<li>
            <a href="./page.html?${key}">${article[key].title}</a>
          </li>`
    );
  });
  const link = decodeURI(window.location.href).split('?')[1];
  console.log(link);
  const matched = article[link];
  console.log(matched);
  
};

closer.addEventListener('click', (e) => {
  e.preventDefault();
  /**
   * @type {HTMLDivElement}
   */
  const parent = e.currentTarget.parentElement.parentElement;
  parent.style.transform = 'translateX(150%)';
});

rider.addEventListener('click', (e) => {
  e.preventDefault();
  navContainer.style.transform = 'translateX(0%)';
});

const initParsingAPI = async () => {
    const result = await fetch(``);
    const data = await result.json();
    const parsed = data.parsed;
    defaultContainer.insertAdjacentHTML('afterbegin', parsed);
}