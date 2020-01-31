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

let inputFields = document.querySelectorAll(".input-field")

let isRequired = " is required"
// let fields = document.querySelectorAll(".field")

let el = document.querySelector("form")
el.addEventListener("submit", function(event) {
    event.preventDefault();
    for (let field of inputFields) {
        if (field.querySelector("input").value == "") { 
            if (field.classList.contains("input-invalid")) {
                console.log("do nothing")
            } else {
                console.log("empty")
                field.classList.add("input-invalid")
                field.querySelector("label").innerHTML += isRequired
            }  
        } else { 
            console.log("not empty")
            field.classList.add("input-valid")
            // if (field.classList.contains("input-invalid")) {
            //     field.classList.remove("input-invalid")
            //     field.querySelector("label").innerHTML.replace(" is required", " ")
            // }
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


