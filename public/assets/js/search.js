let srcInput = document.getElementById("searchInput");
let srcBtn = document.getElementById("searchBtn");
let carList = document.getElementById("carList");
let ownerName = document.getElementById("ownerName");
let addCarForm = document.getElementById("addCarForm");
let userIndex = 0;

srcBtn.addEventListener("click", function(){
    if(srcInput.value !== ""){
        fetch(`${location.href}users`)
        .then(response => {
            return response.json();
        })
        .then( users =>{
            let searchStatus = false;
            
            for(let i = 0; i < users.length; i++){
                if(srcInput.value == users[i].name + " " + users[i].lastname || srcInput.value == users[i].PN){
                    searchStatus = true;
                    userIndex = i;

                    break
                }
            }
            if(searchStatus){
                carList.innerHTML = "";
                ownerName.innerHTML = "";
                ownerName.innerHTML = `${users[userIndex].name} ${users[userIndex].lastname}`;
                test3.style.opacity = "1"
                for(let i = 0; i < users[userIndex].cars.length; i++){
                    carList.innerHTML += `
                    <div class="rightside__ownedcars-item">
                        <h3 class="rightside__ownedcars-item--header">Make: ${users[userIndex].cars[i].make}</h3>
                            <div  class="flexxx">
                                <div class="rightside__ownedcars-item--specs">Model: ${users[userIndex].cars[i].model}</div>
                                <div class="rightside__ownedcars-item--specs">VIN: ${users[userIndex].cars[i].vin}</div>
                                <div class="rightside__ownedcars-item--specs">Legal: ${users[userIndex].cars[i].legal}</div>
                                <div class="rightside__ownedcars-item--specs">Color: ${users[userIndex].cars[i].color}</div>
                            </div>
                    </div>
                    `
                }
                searchStatus = false;
                addCarForm.innerHTML = `
                <input type="text" class="rightside__car-input" name="make" placeholder="Make" required>
                <input type="text" class="rightside__car-input" name="model" placeholder="Model" required>
                <input type="text" class="rightside__car-input" name="vin" placeholder="VIN" required> 
                <input type="text" class="rightside__car-input" name="legal" placeholder="Legal" required>
                <input type="text" class="rightside__car-input" name="color" placeholder="color" required>
                <input type="hidden" name="currentIndex" value="${users[userIndex].PN}">
                <button type="submit" class="rightside__car-add" name="addCar" id="addCar">Add car</button>
                <input type="hidden" name="method" value="put">
                `
            }else{
                alert('user not found!')
            }

            
        })
        .catch( error => {
            console.error(error)
        });
        
        
    }
})