const express = require("express");
const app = express();
const port = 3000;
const { MainController } = require("./controllers/main.controllers");
const { UserController, UserRegistration } = require("./controllers/user.controllers");



app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", MainController);

app.get("/users", UserController )
app.post("/users", UserRegistration )



app.listen(port, () => {
    console.log(`server runs at port ${port}`);
});
