const fs = require('fs');
const CircularJSON = require('circular-json');

module.exports = {
  saveREQ(req, res, next) {
    let dir = './logs';
    let data = CircularJSON.stringify(req);
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let h = date.getHours();
    let m = date.getMinutes();

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    fs.writeFileSync(`./logs/${month + 1}-${day}-${year}_${h}-${m}.json`, data);
    next();
  }
};
