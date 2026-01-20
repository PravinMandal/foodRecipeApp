const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB connected");
        return true;
    } catch (err) {
        console.error("MongoDB connection error:", err && err.message ? err.message : err);
        console.warn("Continuing without DB connection — some features may be unavailable.");
        return false;
    }
};

module.exports = connectDb;