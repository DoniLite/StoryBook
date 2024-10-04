import { article } from "./article.js";

/**
 * @type {HTMLUListElement}
 */
const articleContainer = document.querySelector('#article');

const closer = document.querySelector('#closer');
const rider = document.querySelector('#rider');
const navContainer = document.querySelector('#navContainer');
const navList = document.querySelector('#navList');

window.onload = () => {
    Object.keys(article).forEach((key) => {
      articleContainer.insertAdjacentHTML(
        'beforeend',
        `<li><a href="./page.html?${key}">${article[key].title}</a></li>`
      );
      navList.insertAdjacentHTML(
        'beforeend',
        `<li>
            <a href="./page.html?${key}">${article[key].title}</a>
          </li>`
      );
    });
}

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
})