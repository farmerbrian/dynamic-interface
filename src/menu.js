const menuPage = () => {
	const container = document.querySelector('#container');
	container.innerHTML = `
  <div id="menu-container">
  <div id="menu-title"><h1>Our Menu</h1></div>
  <div id="menu-items">
    <div class="item-container" id="item1">
      <img class="item-img" src="burger.jpeg" alt="Burger">
      <h2>Burger</h2>
      <h3>$9.99</h3>
      <p>Photo by <a href="https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>
    <div class="item-container" id="item2">
      <img class="item-img" src="pizza.jpeg" alt="Pizza">
      <h2>Pizza</h2>
      <h3>$14.99</h3>
      <p>Photo by <a href="https://unsplash.com/@thisisnando?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fernando Andrade</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>
    <div class="item-container" id="item3">
      <img class="item-img" src="pasta.jpeg" alt="Pasta">
      <h2>Pasta</h2>
      <h3>$8.99</h3>
      <p>Photo by <a href="https://unsplash.com/@bleiplays33?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Lei</a> on <a href="https://unsplash.com/s/photos/pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p> 
    </div>
  </div>
</div>
  `;
	const menuBtn = document.getElementById('menu-btn');
	menuBtn.classList.add('selected');
};

export { menuPage };
