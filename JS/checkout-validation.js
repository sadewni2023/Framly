// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const form = document.querySelector('.container form');
    const submitBtn = document.querySelector('.submit-btn');
    const validationCard = document.querySelector('.card');
    const dismissBtn = document.querySelector('.dismiss');
    
    // Initially hide the validation card
    validationCard.style.display = 'none';
    
    // Add event listener for form submission
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from actually submitting
        
        // Check if all required fields are filled
        const requiredInputs = form.querySelectorAll('input[required]');
        let allFilled = true;
        
        requiredInputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid #ccc';
            }
        });
        
        if (allFilled) {
            // Hide the form
            form.style.display = 'none';
            
            // Show the validation card in the center of the page
            validationCard.style.display = 'block';
            validationCard.style.position = 'fixed';
            validationCard.style.top = '50%';
            validationCard.style.left = '50%';
            validationCard.style.transform = 'translate(-50%, -50%)';
            validationCard.style.zIndex = '1000';
        }
    });
    
    // Add event listener for the dismiss button on the card
    dismissBtn.addEventListener('click', function() {
        // Hide the validation card
        validationCard.style.display = 'none';
        
        // Optional: Show the form again if needed
        // form.style.display = 'block';
    });
    
    // Add event listeners for the action buttons on the card
    const historyBtn = document.querySelector('.history');
    const trackBtn = document.querySelector('.track');
    
    historyBtn.addEventListener('click', function() {
        // Redirect to history page or handle history action
        window.location.href = '../HTML/UserProfile.html'; // Adjust as needed
    });
    
    trackBtn.addEventListener('click', function() {
        // Redirect to tracking page or handle tracking action
        // For now, just hide the card
        validationCard.style.display = 'none';
    });
});