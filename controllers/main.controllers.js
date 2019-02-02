const path = require('path');

const MainController = (req, res) => {
    res.sendFile(path.join("../public", "/index.html"));
}

module.exports = { MainController }