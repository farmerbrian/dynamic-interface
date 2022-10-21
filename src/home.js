const homePage = () => {
	const container = document.querySelector('#container');
	container.innerHTML = `
    <div id="slider-container" class="slider-container">
    <div class="slider">
      <img src="slider1.jpeg" class="slider-img" alt="Restaurant">
    </div>
    <div class="slider">
      <img src="slider2.jpeg" class="slider-img" alt="Restaurant">
    </div>
    <div class="slider">
      <img src="slider3.jpeg" class="slider-img" alt="Restaurant">
    </div>
    <a class="slider-btn previous">back</a>
    <a class="slider-btn previous">forward</a>
  </div>

  
  <div id="home-container">
        <div><h1>WELCOME TO YOUR FAVORITE RESTAURANT</h1></div>
        <div><h2>Please take a look at our menu to see our offerings.</h2></div>
      </div>
  `;
	const homeBtn = document.getElementById('home-btn');
	homeBtn.classList.add('selected');
};

export { homePage };
