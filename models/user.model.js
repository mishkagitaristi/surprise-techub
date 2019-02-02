function User(name, lastname, fathersName, PN, birthDate, cars ){
    this.name = name;
    this.lastname = lastname;
    this.fathersName = fathersName;
    this.PN = PN;
    this.birthDate = birthDate;
    this.cars = cars;
}

module.exports = { User }