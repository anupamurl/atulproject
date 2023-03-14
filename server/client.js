const express = require('express');
const app = express();
var path = require('path');
const PORT = 3001;

app.use(express.static('public'))
app.get('/*', (req, res) => {
    var options = {
        root: path.join(__dirname) + "/public/"
    };

    var fileName = 'index.html';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));