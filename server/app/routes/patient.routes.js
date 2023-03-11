const { authJwt } = require("../middlewares");
const controller = require("../controllers/patient.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });


    app.get("/api/patient/getallpatient", controller.allpatient);
    app.post("/api/patient/addpatient", controller.addpatient);
    app.post("/api/patient/getPatientbyid", controller.getpatientByid);
    app.post("/api/patient/addMeal", controller.addMeal);
    app.post("/api/patient/addGuide", controller.addGuide);
    app.post("/api/patient/deletelan", controller.deletelan);
    app.post("/api/patient/deleteguide", controller.deleteguide);
    app.post("/api/patient/addplandate", controller.addplandate);
    app.post("/api/patient/deletediteplan", controller.deletediteplan);




};