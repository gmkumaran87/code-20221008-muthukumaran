const express = require("express");
const users = require("./data");
const { bmiCalculator, bmiCategoriesRiskCalculation } = require("./helper");
const app = express();

app.use(express.json());

app.get("/bmi-calculator", (req, res) => {
    // const newUsers = users.map((user) => {});

    const updatedUser = [];
    for (let user of users) {
        const bmi = bmiCalculator({
            HeightCm: user.HeightCm,
            WeightKg: user.WeightKg,
        });

        const { category, healthRisk } = bmiCategoriesRiskCalculation(bmi);

        const obj = {...user, bmi, category: category, healthRisk: healthRisk };

        updatedUser.push(obj);
    }

    // People who are overweight

    const overWeightPeople = updatedUser.filter(
        (user) => user.category === "Overweight"
    ).length;
    console.log("Users", updatedUser, overWeightPeople);

    res
        .status(200)
        .json({
            success: true,
            OverWeightPeople: overWeightPeople,
            UserDetails: updatedUser,
        });
});

const port = "3000";

app.listen(port, console.log("App is listening in the port", port));