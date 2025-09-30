// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Normally, here you would send this data to a server or email service
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // After submission, clear the form
  document.getElementById('contact-form').reset();

  // Show a success message
  alert('Your message has been sent successfully!');
}

