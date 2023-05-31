import './icons.svg';
import './logo.png';
import displayComments from './modules/displayComments.js';
import display from './modules/displayListOfItems.js';
import './style.css';

const apiUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
await display(apiUrl);

const commentButtons = document.querySelectorAll('#comment');
displayComments(commentButtons, apiUrl);
