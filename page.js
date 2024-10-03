import { article } from './article.js';


const closer = document.querySelector('#closer');
const rider = document.querySelector('#rider');
const navContainer = document.querySelector('#navContainer');
const navList = document.querySelector('#navList');

window.onload = () => {
  Object.keys(article).forEach((key) => {
    navList.insertAdjacentHTML(
      'beforeend',
      `<li>
            <a href="/page.html??${article[key].title}">${article[key].title}</a>
          </li>`
    );
  });
  const link = decodeURI(window.location.href).split('??')[1];
  console.log(link);
  const matched = Object.entries(article).filter(evry => evry[1].title === link)[0][1] 
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
