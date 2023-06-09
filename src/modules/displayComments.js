import commentsCounter from './commentsCounter.js';
import getComments from './getComments.js';
import postComment from './postComment.js';

const displayComments = async (current) => {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.innerHTML = '';

  const comments = await getComments(current[0].idCategory);

  const pop = `
    <div class="popup">
         <div class="popup-inside">
            <div class="close-div">
                <i class="fas fa-times close"></i>
            </div>
            <img class="food-img" src="${current[0].strCategoryThumb}" alt="${current[0].strCategory}">
            <h2 class="food-title">${current[0].strCategory}</h2>
            <p class="food-description">${current[0].strCategoryDescription}</p>
            <div class="comments">
                <h2 class="comment-title">Comments <span class="count">(${1})</span></h2>
            </div>
            <form class="comment-form">
                <input type="text" class="name" id="name" name="name" placeholder="Your Name" required>
                <textarea name="comment" placeholder="Your Insights" required></textarea>
                <button type="submit" class="submit">Comment</button>
            </form>
        </div>
    </div>
  `;

  popupContainer.innerHTML = pop;

  const commentsDiv = document.querySelector('.comments');
  commentsDiv.innerHTML = `
    <h2 class="comment-title">Comments <span class="count"></span></h2>
  `;

  comments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
        <span class="comment-date">${comment.creation_date}</span>
        <span class="comment-name">${comment.username}: </span>
        <span class="comment-body">${comment.comment}</span>
    `;
    commentsDiv.appendChild(commentDiv);
  });

  const closeButtons = document.querySelectorAll('.close');
  const lastCloseButton = closeButtons[closeButtons.length - 1];

  lastCloseButton.addEventListener('click', () => {
    const popup = lastCloseButton.closest('.popup');
    popup.classList.toggle('hide');
  });
  const countSpan = document.querySelector('.count');
  const count = commentsCounter();
  countSpan.textContent = `(${count})`;
  const form = document.querySelector('.comment-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = current[0].idCategory;
    const name = form.name.value;
    const comment = form.comment.value;
    await postComment(id, name, comment);

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
    <span class="comment-date">${new Date().toLocaleString()}</span>
    <span class="comment-name">${name}: </span>
    <span class="comment-body">${comment}</span>
  `;
    commentsDiv.appendChild(commentDiv);
    const countSpan = document.querySelector('.count');
    const count = commentsCounter();
    countSpan.textContent = `(${count})`;

    form.reset();
  });
};

export default displayComments;