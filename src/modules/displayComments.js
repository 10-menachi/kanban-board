const popup = (current) => {
  const pop = `
    <div class="popup">
        <div class="popup-inside">
            <div class="close-div">
                <i class="fas fa-times close"></i>
            </div>
            <img class="food-img" src="${current[0].strCategoryThumb}" alt="${current[0].strCategory}">
            <h2 class="food-title">${current[0].strCategory}</h2>
            <p class="food-description">${current[0].strCategoryDescription}</p>
        </div>
    </div>
    `;

  const popupContainer = document.querySelector('.popup-container');
  popupContainer.innerHTML += pop;

  const closeButtons = document.querySelectorAll('.close');
  const lastCloseButton = closeButtons[closeButtons.length - 1];

  lastCloseButton.addEventListener('click', () => {
    const popup = lastCloseButton.closest('.popup');
    popup.classList.toggle('hide');
  });
};

const displayComments = (buttons, url) => {
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const response = await fetch(url);
      const data = await response.json();
      const { categories } = data;
      const current = categories.filter((category) => category.idCategory === button.dataset.id);
      popup(current);
    });
  });
};
export default displayComments;
