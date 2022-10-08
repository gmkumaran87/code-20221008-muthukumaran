const express = require("express");
const users = require("./data");
const { bmiCalculator, bmiCategoriesRiskCalculation } = require("./helper");
const app = express();

app.use(express.json());

app.get("/bmi-calculator", (req, res) => {
    // const newUsers = users.map((user) => {});

    for (let user of users) {
        const bmi = bmiCalculator({
            HeightCm: user.HeightCm,
            WeightKg: user.WeightKg,
        });

        const { category, healthRisk } = bmiCategoriesRiskCalculation(bmi);
        console.log("Users", { user, bmi, category, healthRisk });
    }

    res.status(200).json({ success: true, data: users });
});

const port = "3000";

app.listen(port, console.log("App is listening in the port", port));