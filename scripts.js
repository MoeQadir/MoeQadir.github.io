// Handle form submission for appointment page
const appointmentForm = document.querySelector('.appointment_section form');
appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment scheduled successfully!');
});

// Handle form submission for contact page
const contactForm = document.querySelector('.contact_section form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
