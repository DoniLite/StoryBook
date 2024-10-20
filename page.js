import { article } from './article.js';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const closer = document.querySelector('#closer');
const rider = document.querySelector('#rider');
const navContainer = document.querySelector('#navContainer');
const navList = document.querySelector('#navList');
const defaultContainer = document.querySelector('#parsedContent');

/**
 *
 * @param {{title: string; content: string; meta: string}} obj
 */
const initParsingAPI = (obj) => {
  console.log(marked);
  const html = marked.parse(obj.content);
  console.log(html);
  // const result = await fetch(`http://localhost:3081/api/v1/parser`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     content: obj.content,
  //     ext: 'md',
  //     target: 'html',
  //   }),
  // });

  // if (!result.ok) {
  //   console.error(`Erreur : ${result.statusText}`);
  //   return;
  // }

  // const data = await result.json();
  // console.log(data);

  // if (!data.success) window.location.href = '/';
  // const parsed = data.data;
  defaultContainer.insertAdjacentHTML('afterbegin', html);
  document.querySelector('head').insertAdjacentHTML('beforeend', obj.meta);
};

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
if (!matched) {
  console.error('Article non trouvé');
}
console.log(matched);
initParsingAPI(matched);

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

