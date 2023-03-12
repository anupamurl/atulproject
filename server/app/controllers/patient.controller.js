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
    patient.save((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Patient was registered successfully!", id: data._id });
    });

};



exports.addMeal = (req, res) => {
    let id = req.body.id;
    let mealplan = req.body.mealplan;
    let plandate = req.body.plandate;





    Patient.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$push": { 'plandate.$.mealplan': mealplan } },
        (err, data) => {



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
    let plandate = req.body.plandate;

    console.log(req.body)


    Patient.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$push": { 'plandate.$.guideline': { guidehtml: guideline } } },
        (err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.send({ message: "guideline was added successfully!" });
        })
};

exports.updateGuide = (req, res) => {
    let id = req.body.id;
    let guideline = req.body.guideline;
    let plandate = req.body.plandate;
    let updateGuideID = req.body.updateGuideID
    Patient.findOneAndUpdate({ _id: id, "plandate._id": plandate }, { "$set": { 'plandate.$.guideline.$[outer].guidehtml': guideline } }, {
            arrayFilters: [
                { "outer._id": updateGuideID }
            ]
        },
        (err, data) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.send({ message: "guideline was update successfully!" });
        })
};



exports.addplandate = (req, res) => {
    let id = req.body.id;
    let plandate = req.body.plandate;



    Patient.findByIdAndUpdate(id, { $push: { plandate: plandate } }, (err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "plandate was added successfully!" });
    })
};


exports.deletelan = (req, res) => {
    let pid = req.body.pid;
    let itemId = req.body.itemId;
    let plandate = req.body.plandate;

    Patient.findOneAndUpdate({ _id: pid, 'plandate._id': plandate }, { $pull: { 'plandate.$.mealplan': { _id: itemId } } }).exec((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "mealplan was deleted successfully!" });
        }
    });
};



exports.deletediteplan = (req, res) => {

    let pid = req.body.pid;
    let plandate = req.body.plandate;

    console.log(pid)
    console.log(plandate)

    Patient.findOneAndUpdate({ _id: pid }, { $pull: { plandate: { _id: plandate } } }).exec((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Diet Plan  was deleted successfully!" });
        }
    });
};





exports.deleteguide = (req, res) => {
    let pid = req.body.pid;
    let itemId = req.body.itemId;
    let plandate = req.body.plandate;

    Patient.findOneAndUpdate({ _id: pid, 'plandate._id': plandate }, { $pull: { 'plandate.$.guideline': { _id: itemId } } }, { new: true }).exec((err) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "guideline was deleted successfully!" });
        }
    });
};