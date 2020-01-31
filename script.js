console.log('Add validation!');
// function () {
//     let inputField = document.querySelectorAll(".input-field")
//     for (let i = 0; i < inputField.length; i++) {}
//         if (inputField[i].innerText == "") {
//         inputField[i].classList.add = "input-invalid"
//     } else {
//         inputField.className.add = "input-valid"
//     }
// }

let fields = document.querySelectorAll(".field")

let el = document.querySelector("form")
el.addEventListener("submit", function(event) {
    event.preventDefault();
    for (let field of fields) {
        if (field.value === "" ) {
            console.log("empty")
            field.parentElement.classList.add("input-invalid")
        } else { 
            console.log("not empty")
           field.parentElement.classList.add("input-valid")
        
    }
}
})

// let submitButton = document.querySelector("#submit-button");

// let parkingForm = document.querySelector("#parking-form")

// submitButton.addEventListener("submit", function () {
//     let inputField = document.querySelectorAll(".input-field")
//     for (let i = 0; i < inputField.length; i++) {
//         if (inputField[i].value == "") {
//         console.log("empty")
//         inputField[i].classList.add("input-invalid")
//         } else {
//         console.log("not empty")
//         inputField[i].classList.add("input-valid")
//         }
//     }
// })

// let el = document.querySelector("form");

// el.addEventListener("submit", function(e) {
//     e.preventDefault(); 
// })

// let nameInput = document.querySelector("#name")
// let nameValue = nameInput.value
// let parentDiv = nameInput.parentNode;

// if (nameValue != "") {
//     console.log("not empty")
//     parentDiv.classList.remove("input-invalid")
//     parentDiv.classList.add("input-valid")
// } else {
//     console.log("empty")
//     parentDiv.classList.remove("input-valid")
//     parentDiv.classList.add("input-invalid")
// }


