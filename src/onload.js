// import { menuDiv, MenuList } from './index.js';

const onLoad = () => {
	const content = document.querySelector('#content');
	content.innerHTML = `
  <div id="menu">
  <div><h2 id="home-btn" class="menu-item selected">Home</h2></div>
  <div id='dropdown' class="dropdown">
    <div><h2 id="contact-btn" class="menu-item">Contact Us</h2></div>
    <div class="dropdown-content"> 
      <a href="#">Phone</a>
      <a href="#">Email</a>
      <a href="#">Fax</a>
    </div>
  </div>
  <div><h2 id="menu-btn" class="menu-item">Menu</h2></div>
</div>
<div id="container"></div>
<div id="footer">
<p>Background Photo by <a href="https://unsplash.com/@foodiesfeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Kapusnak</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
</div>
  `;
};

export { onLoad };
