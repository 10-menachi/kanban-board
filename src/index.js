import './logo.png';
import './style.css';
import './icons.svg';
import display from './modules/displayListOfItems.js';

const apiUrl = 'https://themealdb.com/api/json/v1/1/categories.php';
display(apiUrl);
