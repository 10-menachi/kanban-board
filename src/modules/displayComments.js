const displayComments = (current, comments) => {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.innerHTML = '';

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
                <h2 class="comment-title">Comments (${comments.length})</h2>
            </div>
        </div>
    </div>
    `;

  popupContainer.innerHTML = pop;

  const commentsDiv = document.querySelector('.comments');
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
};

export default displayComments;