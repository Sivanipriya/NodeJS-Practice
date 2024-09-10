const mongoose = require("mongoose");
function setup() {
  const url=process.env.NODE_ENV==="development"
  ? `${process.env.DEV_DB_URL}${process.env.DEV_DB_LABEL}`
  :`${process.env.PROD_DB_URL}${process.env.PROD_DB_LABEL}`;
  
   mongoose
    .connect(url)
    .then((response) => {
      console.log("connection success");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { setup };
