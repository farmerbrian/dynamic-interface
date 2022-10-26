import './style.css';
import { onLoad } from './onload.js';
import { homePage, homeSlider } from './home.js';
import { contactPage } from './contact.js';
import { menuPage } from './menu.js';
console.log('woohoo, you are inside index.js');

onLoad();
homePage();
homeSlider();

const menuDiv = document.getElementById('dropdown');
const menuList = document.getElementById('dropdown-content');
const mobileDiv = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

// logic for dropdown menus
function onHover(div, list) {
	div.addEventListener('mouseover', (event) => {
		list.style.setProperty('max-height', '40em');
	});

	div.addEventListener('mouseleave', (event) => {
		list.style.setProperty('max-height', '0');
	});
}

onHover(menuDiv, menuList);
onHover(mobileDiv, mobileMenu);

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
	homeSlider();
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

// Tab switching logic for Mobile menu
const mobileHomeBtn = document.getElementById('mobile-home-btn');
mobileHomeBtn.addEventListener('click', () => {
	setClass();
	homePage();
	homeSlider();
});

const mobileContactBtn = document.getElementById(
	'mobile-contact-btn'
);
mobileContactBtn.addEventListener('click', () => {
	setClass();
	contactPage();
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
	setClass();
	menuPage();
});
