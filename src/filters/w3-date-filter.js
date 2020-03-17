const moment = require('moment');

module.exports = function w3cDate(value) {
  console.log(value);
  const dateObject = moment.unix(Number(value));

  return dateObject.toISOString();
};
