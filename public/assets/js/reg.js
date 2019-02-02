let btn = document.getElementById('test2');
let left = document.getElementById('test1');
let right = document.getElementById('test3');

btn.addEventListener("click", function(){
    right.style.opacity = "1";
})



// window.onload = () => {
//     fetch(`${location.href}users`)
//     .then(response => {
//         return response.json();
//     })
//     .then(users => {
//         alert("you're all done");
//     })
//     .catch( error => {
//         alert('smmthing went wrong')
//         console.log('error');
        
//     } )
// }