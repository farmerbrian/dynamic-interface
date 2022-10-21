import './style.css';
import { onLoad } from './onload.js';
import { homePage } from './home.js';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';
console.log('woohoo, you are inside index.js');

onLoad();
homePage();

const menuDiv = document.getElementById('dropdown');
const menuList = document.querySelector('.dropdown-content');

function onHover(div, list) {
	div.addEventListener('mouseover', (event) => {
		list.style.setProperty('max-height', '40em');
	});

	div.addEventListener('mouseleave', (event) => {
		list.style.setProperty('max-height', '0');
	});
}

onHover(menuDiv, menuList);

// Remove underline from selected 'page'
let buttons = document.querySelectorAll('.menu-item');
let setClass = () => {
	buttons.forEach((button) => {
		button.classList.remove('selected');
	});
};

// Tab switching logic
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
	setClass();
	homePage();
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
	setClass();
	contactPage();
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
	setClass();
	menuPage();
});
