const mongoose = require("mongoose");

const mealplan = new mongoose.Schema({
    mealhtml: String,
    time: String,
    type: String
}, { timestamps: true });

const guideline = new mongoose.Schema({
    guidehtml: String,

}, { timestamps: true });


const plandate = new mongoose.Schema({
    start: Date,
    end: Date,
    mealplan: [mealplan],
    guideline: [guideline]
}, { timestamps: true });



const Patient = mongoose.model(
    "Patient",
    new mongoose.Schema({
        age: Number,
        complaints: String,
        email: String,
        height: Number,
        name: String,
        phone: String,
        weight: Number,
        plandate: [plandate]

    }, { timestamps: true })
);





module.exports = Patient;