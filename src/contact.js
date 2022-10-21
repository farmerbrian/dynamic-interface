const contactPage = () => {
	const container = document.querySelector('#container');
	container.innerHTML = `
  <div id="contact-container">
  <div><h1>Contact Us</h1></div>
  <div><h2>Need to get ahold of us?</h2></div>
  <div><h2>Here's How:</h2></div>
  <div><h3>By Phone: (888) 867-5309</h3></div>
  <div><h3>By Email: welovetohearyourcomplaints@noway.com</h3></div>
  <div><h3>By Fax: You can't be serious...</h3></div>
  <div><h3>By Mail: 2901 Osceola Pkwy, Lake Buena Vista, FL 32830</h3></div>
</div> 
  `;
	const contactBtn = document.getElementById('contact-btn');
	contactBtn.classList.add('selected');
};

export { contactPage };
