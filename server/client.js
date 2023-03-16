const express = require('express');
const app = express();
const PORT = 8081;
app.use(express.static('public'))
console.log(__dirname)
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));