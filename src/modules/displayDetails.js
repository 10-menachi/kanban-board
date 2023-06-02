import displayComments from './displayComments.js';
import getComments from './getComments.js';

const displayDetails = (buttons, url) => {
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const response = await fetch(url);
      const data = await response.json();
      const { categories } = data;
      const current = categories.filter((category) => category.idCategory === button.dataset.id);
      const comments = await getComments(button.dataset.id);
      displayComments(current, comments);
    });
  });
};
export default displayDetails;
