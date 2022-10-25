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
    <a class="slider-btn btn-previous">&#171;</a>
    <a class="slider-btn btn-next">&#187;</a>
    <div class="circle-btns">
    <button class="nav-circle" id="1"></button>
    <button class="nav-circle" id="2"></button>
    <button class="nav-circle" id="3"></button>
    </div>
  </div>

  
  <div id="home-container">
        <div><h1>WELCOME TO YOUR FAVORITE RESTAURANT</h1></div>
        <div><h2>Please take a look at our menu to see our offerings.</h2></div>
      </div>
  `;
	const homeBtn = document.getElementById('home-btn');
	homeBtn.classList.add('selected');
};

function homeSlider() {
	// Set the default slide on page load
	let currentIndex = 1;

	// Automatically advance slides after 5 seconds
	let timerInterval = setInterval(slideTimer, 5000);

	// Start the slider over at the beginning once it automatically advances to the end.
	function slideTimer() {
		if (currentIndex < 4) {
			setSlides(1);
		} else {
			currentIndex = 1;
			setSlides(1);
		}
	}

	//grab forward and backward buttons
	const prevBtn = document.querySelector('.btn-previous');
	const nextBtn = document.querySelector('.btn-next');

	// Event handlers for navigation underneath slides
	const navButtons = document.querySelectorAll('.nav-circle');
	navButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			selectSlide(button.id);
			currentIndex = button.id;
			displaySlides(currentIndex);
		});
	});

	// logic to decide which direction to advance to the next slide
	function setSlides(num) {
		currentIndex = currentIndex + num;
		displaySlides(currentIndex);
	}

	function displaySlides(num) {
		let x;
		let slides = document.getElementsByClassName('slider-img');
		if (num > slides.length) {
			currentIndex = 1;
		}
		if (num < 1) {
			currentIndex = slides.length;
		}
		for (x = 0; x < slides.length; x++) {
			slides[x].classList.remove('show');
			slides[x].classList.add('hide');
		}
		slides[currentIndex - 1].classList.remove('hide');
		slides[currentIndex - 1].classList.add('show');
		selectSlide(currentIndex);
	}

	// Start the slider on page load
	displaySlides(currentIndex);

	// Event handlers for forward and backward buttons
	prevBtn.addEventListener('click', function () {
		setSlides(-1);
	});

	nextBtn.addEventListener('click', function () {
		setSlides(1);
	});

	// Logic for manually selecting a slide
	function selectSlide(slideId) {
		navButtons.forEach((buttonClass) => {
			buttonClass.classList.remove('selected');
		});
		document.getElementById(slideId).classList.add('selected');
	}
}

export { homePage };
export { homeSlider };
