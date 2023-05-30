const createCategoryTemplate = (category) => `
    <div class='item'>
      <img class="food-image" src="${category.strCategoryThumb}" alt="">
      <div class="image-comment">
        <h2>${category.strCategory}</h2>
      </div>
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
