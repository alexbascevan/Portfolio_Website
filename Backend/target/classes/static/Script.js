// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {

    // Get references to the form and message elements
    const form = document.getElementById('emailForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const errorMessage = document.getElementById('errorMessage');

    /**
     * Handles form submission:
     * - Validates form fields (name, email, message).
     * - Shows error messages if validation fails.
     * - Sends form data via Fetch API if validation passes.
     * - Displays confirmation or error messages based on response.
     */
    form.addEventListener('submit', function (event) {
        // Clear previous messages
        confirmationMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Retrieve and trim values from form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('sendersEmail').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Validate form fields
        if (!name) {
            errorMessage.textContent = 'Name is required.';
            valid = false;
        }
        if (!email || !validateEmail(email)) {
            errorMessage.textContent = 'Valid email is required.';
            valid = false;
        }
        if (!message) {
            errorMessage.textContent = 'Message is required.';
            valid = false;
        }

        if (!valid) {
            // Display error message and prevent form submission
            errorMessage.style.display = 'block';
            event.preventDefault(); // Prevent form submission
        } else {
            // Create FormData object from the form
            const formData = new FormData(form);

            // Send form data via Fetch API
            fetch('/sendEmail', {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    // Show confirmation message and clear the form
                    confirmationMessage.style.display = 'block';
                    form.reset(); // Reset the form after successful submission
                } else {
                    // Display error message for failed email send
                    errorMessage.textContent = 'Failed to send email.';
                    errorMessage.style.display = 'block';
                }
            }).catch(error => {
                // Handle network or other errors
                console.error('Error:', error);
                errorMessage.textContent = 'An error occurred while sending the email.';
                errorMessage.style.display = 'block';
            });

            event.preventDefault(); // Prevent default form submission
        }
    });

    /**
     * Validates email format using a basic regex pattern.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - Returns true if email is valid, false otherwise.
     */
    function validateEmail(email) {
        // Basic email pattern for validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {

    // Get references to all navigation diamonds and sections
    const diamonds = document.querySelectorAll('.nav-diamond');
    const sections = document.querySelectorAll('section');

    /**
     * Updates the appearance of navigation diamonds based on the current scroll position:
     * - Sets the active diamond and styles it according to the current section in view.
     * - Updates non-active diamonds to their default appearance.
     */
    function updateDiamonds() {
        let index = sections.length;
        // Find the section that is currently in view
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        // Update each diamond based on its active state
        diamonds.forEach((diamond, i) => {
            if (i === index) {
                diamond.classList.add('active'); // Add active class to current diamond
                diamond.style.backgroundColor = 'transparent'; // Ensure it's transparent for active
                diamond.style.borderColor = 'black'; // Black border for active square
            } else {
                diamond.classList.remove('active'); // Remove active class from other diamonds
                diamond.style.backgroundColor = 'black'; // Filled diamond
                diamond.style.borderColor = 'black'; // Black border for inactive diamond
            }
        });
    }

    // Initial call to set the correct state for diamonds
    updateDiamonds();
    // Update diamonds on scroll
    window.addEventListener('scroll', updateDiamonds);

    /**
     * Scrolls to the section associated with the clicked diamond:
     * - Smoothly scrolls the page to the target section.
     */
    diamonds.forEach(diamond => {
        diamond.addEventListener('click', () => {
            // Scroll to the section associated with the clicked diamond
            document.getElementById(diamond.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
