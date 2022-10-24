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
	let currentIndex = 1;

	let timerInterval = setInterval(slideTimer, 5000);

	function slideTimer() {
		if (currentIndex < 3) {
			currentIndex++;
			setSlides(1);
		} else {
			currentIndex = 1;
			setSlides(1);
		}
	}

	const prevBtn = document.querySelector('.btn-previous');
	const nextBtn = document.querySelector('.btn-next');

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
			// slides[x].style.display = 'none';
			slides[x].classList.remove('show');
			slides[x].classList.add('hide');
		}
		// slides[currentIndex - 1].style.display = 'block';
		slides[currentIndex - 1].classList.remove('hide');
		slides[currentIndex - 1].classList.add('show');
	}

	displaySlides(currentIndex);

	prevBtn.addEventListener('click', function () {
		setSlides(-1);
	});

	nextBtn.addEventListener('click', function () {
		setSlides(1);
	});

	const navButtons = document.querySelectorAll('.nav-circle');
	navButtons.forEach((button) => {
		// button.classList.remove('selected');
		button.addEventListener('click', (event) => {
			button.classList.add('selected');
			selectSlide(button.id);
		});
	});

	function selectSlide(id) {
		console.log(id);
	}
}

export { homePage };
export { homeSlider };
