const { User } = require("../models/user.model");
const { usersLocation,getUsers,saveUsers } = require("../utils");

const  Users = getUsers();

const UserController = (req,res) => {
    let myModelUsers = Users.map( userData => new User(userData.name, userData.lastname, userData.fathersName, userData.PN, userData.birthDate, userData.cars) )
    res.json(myModelUsers);
}

const UserRegistration = (req,res) => {
    Users.push({
        "name" : req.body.name,
        "lastname" : req.body.lastname,
        "fathersName" : req.body.fathersName,
        "PN" : req.body.PN,
        "birthDate": req.body.birthDate,
        "cars" : []
    })
    saveUsers(Users);
    res.json({message : "okkk"})
}


module.exports = { UserController, UserRegistration }
