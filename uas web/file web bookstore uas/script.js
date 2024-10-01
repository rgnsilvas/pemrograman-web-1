$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});
