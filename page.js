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
  await initParsingAPI(matched);
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

/**
 *
 * @param {{title: string; content: string}} obj
 */
const initParsingAPI = async (obj) => {
  const result = await fetch(`https://ghostify.site/api/v1/parser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: obj.content,
      ext: 'md',
      target: 'html',
    }),
  });

  if (!result.ok) {
    console.error(`Erreur : ${result.statusText}`);
    return;
  }

  const data = await result.json();
  console.log(data);

  if (!data.success) window.location.href = '/';
  const parsed = data.data;
  defaultContainer.insertAdjacentHTML('afterbegin', parsed);
};
