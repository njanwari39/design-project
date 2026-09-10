document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: Favorite Item Tracker using Objects/Arrays and localStorage
    const bakerySpecials = [
        { id: 'sourdough', name: 'Signature Sourdough' },
        { id: 'cookies', name: 'Artisan Cookies' },
        { id: 'pastries', name: 'Morning Bakes' }
    ];

    const favoriteDisplay = document.getElementById('favorite-status');
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    // Load saved browser storage state on page load
    const savedFavorite = localStorage.getItem('nsb_preferred_item');
    if (savedFavorite && favoriteDisplay) {
        favoriteDisplay.textContent = `Saved Preference: ${savedFavorite}`;
    }

    // Handle button clicks to save selection
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedId = e.target.getAttribute('data-item');
            const matchedItem = bakerySpecials.find(item => item.id === selectedId);
            
            if (matchedItem) {
                localStorage.setItem('nsb_preferred_item', matchedItem.name);
                if (favoriteDisplay) {
                    favoriteDisplay.textContent = `Saved Preference: ${matchedItem.name}`;
                }
            }
        });
    });

    // Feature 2: Contact/Pre-Order Form Validation
    const preorderForm = document.getElementById('preorder-form');
    if (preorderForm) {
        preorderForm.addEventListener('submit', (event) => {
            let formIsValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');

            // Clear previous error notes
            nameError.textContent = '';
            emailError.textContent = '';

            // Check 1: Required Name Field
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your full name so we can label your order.';
                formIsValid = false;
            }

            // Check 2: Email Format Validation
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValue) {
                emailError.textContent = 'An email address is required for confirmation notices.';
                formIsValid = false;
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = 'Please enter a valid email format containing "@" and a domain extension.';
                formIsValid = false;
            }

            // Prevent submission if errors exist
            if (!formIsValid) {
                event.preventDefault();
            }
        });
    }
});