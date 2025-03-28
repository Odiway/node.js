module.exports = {
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug",
    "CONNECTION_STRING":process.env.CONNECTION_STRING || "mongdb://localhost:27017/node.js"
}