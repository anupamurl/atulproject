const config = require("../config/auth.config");
const db = require("../models");
const Patient = db.patient;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.allpatient = (req, res) => {
    // Patient.find({}, function(err, users) {
    //     res.send(users);
    // })

    Patient.find({}).sort({ createdAt: -1 }).exec((err, docs) => {

        res.send(docs);


    })
};


exports.getpatientByid = (req, res) => {
    let id = req.body.id;
    Patient.findById(id, function(err, users) {
        res.send(users);
    })
};




exports.addpatient = (req, res) => {

    const patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        complaints: req.body.complaints,
        age: req.body.age,
        height: req.body.height,
        phone: req.body.phone,
        weight: req.body.weight
    });
    patient.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Patient was registered successfully!" });
    });

};



exports.addMeal = (req, res) => {
    let id = req.body.id;
    let mealplan = req.body.mealplan;

    console.log(id)
    console.log(mealplan)

    Patient.findByIdAndUpdate(id, { mealplan: mealplan }, (err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "mealplan was added successfully!" });
    })
};


exports.addGuide = (req, res) => {
    let id = req.body.id;
    let guideline = req.body.guideline;
    console.log(guideline)
    console.log(id)


    Patient.findByIdAndUpdate(id, { guideline: guideline }, (err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "guideline was added successfully!" });
    })
};