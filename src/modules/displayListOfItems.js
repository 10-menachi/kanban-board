import { createLike, getLikes } from './Likes.js';

const createCategoryTemplate = (category) => `
    <div class='item'>
      <img class="food-image" src="${category.strCategoryThumb}" alt="">
        <h2 class="food-title">${category.strCategory}</h2>
            <div class="like">
            <svg class="heart" id=${category.idCategory}>
                    <use href="icons.svg#heart-like"></use>
                </svg>
                </div>
             <div class="likes"><span></span>likes</div> 
            <button type="button" id="comment" data-id="${category.idCategory}"> Comments</button>
              
            <button type="button" id="reservation"> Resevation</button>
      </div>
  `;

const display = async (apiUrl) => {
  const displayItems = document.querySelector('.display-items');
  const response = await fetch(apiUrl);
  const data = await response.json();
  const templates = data.categories.map(createCategoryTemplate);
  displayItems.innerHTML = templates.join('');

  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      const span = heart.parentElement.nextElementSibling.firstElementChild;
      const i = span.textContent;
      span.textContent = +i + 1;
      createLike(heart.id);
    });
  });

  hearts.forEach((heart) => {
    const span = heart.parentElement.nextElementSibling.firstElementChild;
    getLikes().then((data) => {
      data.forEach((item) => {
        if (item.item_id === heart.id) {
          span.textContent = item.likes;
        }
      });
    });
  });

  return data;
};

export default display;
