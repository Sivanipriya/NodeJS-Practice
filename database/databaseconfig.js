const mongoose = require("mongoose");

function setup() {
  const url = process.env.NODE_ENV === "development"
    ? `${process.env.DEV_DB_URL}${process.env.DEV_DB_LABEL}`
    : `${process.env.PROD_DB_URL}${process.env.PROD_DB_LABEL}`;
  
  mongoose
    .connect(url, {
      serverSelectionTimeoutMS: 10000,  // Adjust the connection timeout as needed
      socketTimeoutMS: 45000,          // Adjust the socket timeout as needed
    })
    .then((response) => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
}

module.exports = { setup };
