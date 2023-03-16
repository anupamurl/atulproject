const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
var request = require('request');

const dbConfig = require("./app/config/db.config");

const app = express();
app.use(express.static('public'))
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");


var corsOptions = {
    origin: ["http://localhost:4200", "http://localhost", 'http://54.190.34.238:8081'],
    credentials: true
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "bezkoder-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
);

const db = require("./app/models");
const Role = db.role;

db.mongoose
    .connect(`mongodb://localhost:27017/peping_node`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");

    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// simple route

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/patient.routes")(app);


const Patient = db.patient;

function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        "nbsp": " ",
        "amp": "&",
        "quot": "\"",
        "lt": "<",
        "gt": ">"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}


app.get("/generatereport/:id/:planid", (req, res) => {


    var query = req.params;





    Patient.findById(query.id, function(err, users) {

        let info = {...users.toObject() }


        let plandate = info.plandate.filter((node) => {

            return node._id == query.planid

        })

        if (plandate && plandate.length) {

            info['start'] = plandate[0].start.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })
            info['end'] = plandate[0].end.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })
            info['mealplan'] = plandate[0].mealplan
            info['guideline'] = plandate[0].guideline

        }


        console.log("a")

        ejs.renderFile((path.join(__dirname, './views/', "report-template.ejs")), { users: info }, (err, data) => {




            if (err) {
                console.log("b")

                res.send(err);
            } else {
                console.log("b")


                var options = { format: 'Letter' };

                const file = `${__dirname}/public/`;


                pdf.create(decodeEntities(data), options).toFile(file + "reportnew.pdf", function(err, data) {

                    console.log("======")
                    console.log(data)
                    console.log(err)
                    console.log("======")

                    if (err) {
                        res.send(err);
                    } else {

                        res.download(file + '/reportnew.pdf', function(err) {
                            if (err) {
                                console.log(err);
                            }
                        })
                    }
                });
            }
        });
    })





})



let PORT = 8080;
app.listen(PORT, () => {
    console.log(`client is running on port ${PORT}.`);
});