const { User } = require("../models/user.model");
const {usersLocation, getUsers, saveUsers} = require("../utils");

const  Users = getUsers();

const UserController = (req,res) => {
    let myModelUsers = Users.map( userData => new User(userData.name, userData.lastname, userData.fathersName, userData.PN, userData.birthDate, userData.cars) )
    res.json(myModelUsers);
}

const UserRegistration = (req,res) => {
    if(req.body.method === "post"){
        let pnStatus = true;
        if(Users.length > 0){
            for(let i = 0; i < Users.length; i++){
                if(req.body.PN == Users[i].PN){
                    pnStatus = false;
                    break
                }
            }
        }else {
            console.log("user already registered");
            pnStatus = true;
            
        }
        if(req.body.PN.length == 11 && pnStatus){
            Users.push({
                "name" : req.body.name,
                "lastname" : req.body.lastname,
                "fathersName" : req.body.fathersName,
                "PN" : req.body.PN,
                "birthDate": req.body.birthDate,
                "cars" : [],
            })
            pnStatus = true;
            saveUsers(Users);
            res.redirect('back');
        }
    }else if(req.body.method === "put"){
        let legalStatus = true;
        for(let i = 0; i < Users.length; i++){
            if(Users[i].cars.length > 0){
                for(let j = 0; j < Users[i].cars.length; j++){
                    if(Users[i].cars[j].legal == req.body.legal){
                        legalStatus = false;
                        break
                    }
                }
            }else{
                legalStatus = true;
            }
            break; 
        }
        if(legalStatus){
            for(let i = 0; i < Users.length; i++){
                if(req.body.currentIndex = Users[i].PN){
                    Users[i].cars.push(
                        {
                            make: req.body.make,
                            model : req.body.model,
                            vin : req.body.vin,
                            legal : req.body.legal,
                            color : req.body.color
                        }
                    )
                }
            }

            legalStatus = true;
            saveUsers(Users);
            res.redirect('back');
        }
    }
}


module.exports = { UserController, UserRegistration }