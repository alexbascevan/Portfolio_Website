document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emailForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (event) {
        // Clear previous messages
        confirmationMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Validate fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('sendersEmail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let valid = true;

        if (!name) {
            errorMessage.textContent = 'Name is required.';
            valid = false;
        }
        if (!email || !validateEmail(email)) {
            errorMessage.textContent = 'Valid email is required.';
            valid = false;
        }
        if (!subject) {
            errorMessage.textContent = 'Subject is required.';
            valid = false;
        }
        if (!message) {
            errorMessage.textContent = 'Message is required.';
            valid = false;
        }

        if (!valid) {
            errorMessage.style.display = 'block';
            event.preventDefault(); // Prevent form submission
        } else {
            const formData = new FormData(form);

            fetch('/sendEmail', {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    // Show confirmation message and clear form
                    confirmationMessage.style.display = 'block';
                    form.reset(); // Reset the form after successful submission
                } else {
                    errorMessage.textContent = 'Failed to send email.';
                    errorMessage.style.display = 'block';
                }
            }).catch(error => {
                console.error('Error:', error);
                errorMessage.textContent = 'An error occurred while sending the email.';
                errorMessage.style.display = 'block';
            });

            event.preventDefault(); // Prevent default form submission
        }
    });

    function validateEmail(email) {
        // Basic email pattern for validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
