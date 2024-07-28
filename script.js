// Function to convert inches to feet and display the result
function convertToFeet() {
    // Get the input value
    const inches = parseFloat(document.getElementById('inches').value);

    // Check if the input is valid
    if (isNaN(inches) || inches < 0) {
        document.getElementById('result').textContent = 'Please enter a valid number of inches.';
        return;
    }

    // Convert inches to feet
    const feet = inches / 12;

    // Display the result
    document.getElementById('result').textContent = `${inches} inches is equal to ${feet.toFixed(2)} feet.`;
}

// Function to convert inches to yards and display the result
function convertToYards() {
    // Get the input value
    const inches = parseFloat(document.getElementById('inches').value);

    // Check if the input is valid
    if (isNaN(inches) || inches < 0) {
        document.getElementById('result').textContent = 'Please enter a valid number of inches.';
        return;
    }

    // Convert inches to yards
    const yards = inches / 36;

    // Display the result
    document.getElementById('result').textContent = `${inches} inches is equal to ${yards.toFixed(2)} yards.`;
}
