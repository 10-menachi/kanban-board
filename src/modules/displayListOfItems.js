const createCategoryTemplate = (category) => `
    <div class='item'>
      <img class="food-image" src="${category.strCategoryThumb}" alt="">
        <h2 class="food-title">${category.strCategory}</h2>
            <div class="like">
            <svg class="heart">
                    <use href="icons.svg#heart-like"></use>
              </svg>
             <h1 class="likes">likes</h1> 
             </div>
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

  return data;
};

export default display;
