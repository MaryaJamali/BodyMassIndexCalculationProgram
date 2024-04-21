function calculateBMI() {
    // Find page elements
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultElement = document.getElementById("result");

    // Check if height and weight inputs are filled
    if (heightInput.value.trim() === '' || weightInput.value.trim() === '') {
        resultElement.innerHTML = "Please fill in both height and weight fields.";
        return;
    }

    // Parse height and weight values
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

 
