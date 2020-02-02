// VALIDATE FORM HAS ENTERED VALUES

let inputFields = document.querySelectorAll(".input-field")
let isRequired = " info is required"
let badCarData = "<br/><em>Car year is not valid</em>"
let form = document.querySelector("#parking-form")
let carYear = document.querySelector("#car-year")
let carField = document.querySelector("#car-field")
let numbers = /^[0-9]+$/



form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkCarField ();
    // checkEmpty();
}
)

//
function checkCarField () {
    if (carField.classList.contains("bad-data")) {
        if ((carYear.value > 1900) && (carYear.value <= 2020) && (carYear.value.match(numbers))) {
            carField.classList.add("input-valid")
            // FIGURE OUT HOW TO REMOVE LABEL STRINGS
            carField.querySelector("label").innerText.replace(isRequired, "")
            let err = carField.lastChild
            carField.removeChild(err)
            carField.classList.remove("bad-data")
            carField.classList.remove("input-invalid")
        } else if (carYear.value == "") {
            carField.classList.remove("bad-data")
            carField.classList.remove("input-invalid")
            let err = carField.lastChild
            carField.removeChild(err)

        }

    } else if (( carYear.value !== "") && ((carYear.value <= 1900 ) || ((carYear.value > 2020) || (carYear.value.match(numbers)) == false))) {
        console.log("car data bad")
        carField.classList.add("bad-data")
        carField.classList.remove("input-valid")
        carField.classList.add("input-invalid")
        let newEl = document.createElement("div")
        let fieldError = document.createTextNode("*Year not valid")
        newEl.appendChild(fieldError)
        carField.appendChild(newEl)
        //FIGURE OUT HOW TO ADD isRequired IF NOT THERE
        // if (carField.querySelector("label").contains(isRequired) == false) { 
        //     carField.querySelector("label").innerText += isRequired
        // }

    } else if ((carYear.value > 1900) && (carYear.value <= 2020) && (carYear.value.match(numbers))) { 
        carField.classList.add("input-valid")
        carField.querySelector("label").innerHTML.replace(isRequired, "")
        if (carField.classList.contains("bad-data")) {
        let err = carField.lastChild
        carField.removeChild(err)
        }

    } 
}

    
   


    





function checkEmpty() {
    for (let field of inputFields) {
        
        if (field.querySelector("input").value == "") { 
            console.log("do nothong")
            if (field.classList.contains("input-invalid")) {
                
            } else {
                field.classList.remove("input-valid")
                field.classList.add("input-invalid")
                if (field.querySelector("label").innerHTML.includes(isRequired) == false) {
                    field.querySelector("label").innerHTML += isRequired
                }   
            }  
        } else { 
            console.log("check for bad data...")
            if (field.classList.contains("bad-data")){
                console.log("bad data - do not validate")
            } else {
                console.log("data is good")
                field.classList.remove("input-invalid")
                field.classList.add("input-valid")
                if (field.querySelector("label").innerHTML.includes(isRequired) == true) {
                    field.querySelector("label").innerHTML = field.querySelector("label").innerHTML.replace(isRequired, "")
                }
            }
            
        
        
        }
    }    
}

// ADD DIV NODES FOR ERRORS


// if (carYear.value <= 1900) {
//     console.log("nope")
//     carField.querySelector("label").innerHTML += yearIsNotValid
//     carField.classList.add("input-invalid")
// } else if (carYear.value > 1900) {
//     carField.querySelector("label").innerHTML  = carField.querySelector("label").innerHTML.replace(yearIsNotValid, "")
//     carField.querySelector("label").innerHTML  = carField.querySelector("label").innerHTML.replace(isRequired, "")
//     carField.classList.remove("input-invalid")
//     carField.classList.add("input-valid")




// function checkCarField () {
//     if (carField.classList.contains("bad-data")) {
//         if (carYear.value > 1900) {
//             carField.classList.add("input-valid")
//             // FIGURE OUT HOW TO REMOVE LABEL STRINGS
//             carField.querySelector("label").innerText.replace(isRequired, "")
            
//             carField.classList.remove("bad-data")
//             carField.classList.remove("input-invalid")
//         } else if (carYear.value == "") {
//             carField.classList.remove("bad-data")
//         }

//     } else if ((carYear.value <= 1900 ) && (carYear.value !== "")) {
//             console.log("car data bad")
//             carField.classList.add("bad-data")
//             carField.classList.remove("input-valid")
//             carField.classList.add("input-invalid")
//             // let newEl = document.createElement("div")
//             // let fieldError = document.createTextNode("*required field")
//             // newEl.appendChild(fieldError)
//             // carField.appendChild(newEl)

//     } else if ((carYear.value > 1900) && (carYear.value <= 2020)) { 
//         carField.classList.add("input-valid")
//         carField.querySelector("label").innerHTML.replace(isRequired, "")

//     } 
// }