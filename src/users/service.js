// const { Account, AccountSerialNumber , Customer} = require("../models");
const User = require("../../models/user");
const sequelize = require("sequelize");


const user = {

    //User registration
    registration: async (req, res) => {

        res.send("registered!");
    },

    //User login
    login: async (req, res) => {

        res.send("you are logged in!");
    },

};

module.exports = user;