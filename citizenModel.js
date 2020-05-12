// citizenModel.js

var mongoose = require("mongoose");

var citizenSchema = mongoose.Schema(
    {
        // กำหนดชื่อและชนิดของ Document
        userId: {
            type: Number
        },
        userName: {
            type: String
        },
        userEmail: {
            type: String
        },
        userStatus: {
            type: String
        }
    },
    {
        collection: "citizenId"
    }
);

var citizen = mongoose.model("citizenId", citizenSchema);
module.exports = citizen;