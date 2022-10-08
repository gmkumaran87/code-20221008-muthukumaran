const bmiCalculator = ({ HeightCm, WeightKg }) => {
    try {
        const weight = Number(WeightKg);
        const height = Number(HeightCm) / 100;

        if (isNaN(weight) || isNaN(height)) {
            throw new Error("Please enter valid arguments");
        }

        if (weight < 0 || height < 0) {
            throw new Error("Please enter postive intgers for Weight and Height");
        }
        // console.log("BMI ", height, weight);

        const bmi = Number((weight / Math.pow(height, 2)).toFixed(2));

        // console.log("BMI calculation", bmi);
        return bmi;
    } catch (error) {}
};

const bmiCategoriesRiskCalculation = (bmi) => {
    const bmiCategory = {
        category: "",
        healthRisk: "",
    };

    if (bmi < 18.5) {
        (bmiCategory.category = "Underweight"),
        (bmiCategory.healthRisk = "Malnutrition risk");
    } else if (bmi <= 24.9) {
        (bmiCategory.category = "Normal weight"),
        (bmiCategory.healthRisk = "Low risk");
    } else if (bmi <= 29.9) {
        (bmiCategory.category = "Overweight"),
        (bmiCategory.healthRisk = "Enhanced risk");
    } else if (bmi <= 34.9) {
        (bmiCategory.category = "Moderately obese"),
        (bmiCategory.healthRisk = "Medium risk");
    } else if (bmi <= 39.9) {
        (bmiCategory.category = "Severel obese"),
        (bmiCategory.healthRisk = "Hight risk");
    } else if (bmi >= 40) {
        (bmiCategory.category = "Very severel obese"),
        (bmiCategory.healthRisk = "Very high risk");
    }

    return bmiCategory;
};

module.exports = { bmiCalculator, bmiCategoriesRiskCalculation };