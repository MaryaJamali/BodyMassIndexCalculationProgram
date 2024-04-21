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

    // Convert height to meters
    var heightInMeters = height / 100;

    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);

    // Determine body status based on BMI
    var bodyStatus = "";
    if (bmi < 15) {
        bodyStatus = "Severe Thinness";
    } else if (bmi >= 15 && bmi < 16) {
        bodyStatus = "Moderate Thinness";
    } else if (bmi >= 16 && bmi < 18.5) {
        bodyStatus = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        bodyStatus = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        bodyStatus = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        bodyStatus = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
        bodyStatus = "Obese Class II";
    } else if (bmi >= 40 && bmi < 45) {
        bodyStatus = "Obese Class III";
    } else if (bmi >= 45 && bmi < 50) {
        bodyStatus = "Obese Class IV";
    } else if (bmi >= 50 && bmi < 60) {
        bodyStatus = "Obese Class V";
    } else {
        bodyStatus = "Obese Class VI";
    }

    // Display body status
    var resultText = "Your BMI is: " + bmi.toFixed(2);
    resultText += "<br>Body status: <span style='color: ";

    switch (bodyStatus) {
        case "Severe Thinness":
        case "Moderate Thinness":
            resultText += "lightblue";
            break;
        case "Mild Thinness":
            resultText += "darkblue";
            break;
        case "Normal":
            resultText += "green";
            break;
        case "Overweight":
            resultText += "orange";
            break;
        case "Obese Class I":
        case "Obese Class II":
        case "Obese Class III":
            resultText += "darkorange";
            break;
        case "Obese Class IV":
        case "Obese Class V":
        case "Obese Class VI":
            resultText += "red";
            break;
    }

    resultText += "'>" + bodyStatus + "</span>";

    // Calculate ideal weight range based on BMI
    var lowerBound = 18.5 * heightInMeters * heightInMeters;
    var upperBound = 24.9 * heightInMeters * heightInMeters;

    // Display ideal weight range
    resultText += "<br>Ideal weight range: " + lowerBound.toFixed(2) + "kg - " + upperBound.toFixed(2) + "kg";

    // Display the result
    resultElement.innerHTML = resultText;
}

// Add event
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateBMI();
});
