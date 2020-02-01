// VALIDATE FORM HAS ENTERED VALUES

let inputFields = document.querySelectorAll(".input-field")
let isRequired = " info is required"
let badCarData = "<br/><em>Car year is not valid</em>"
let form = document.querySelector("#parking-form")
let carYear = document.querySelector("#car-year")
let carField = document.querySelector("#car-field")



form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (carField.classList.contains("bad-data")) {

    } else { 
        if ((carYear.value <= 1900 ) && (carYear.value !== "")) {
            console.log("car data bad")
            carField.querySelector("label").innerHTML += isRequired
            carField.querySelector("label").innerHTML += badCarData
            carField.classList.add("bad-data")
            carField.classList.add("input-invalid")
        } else if ((carYear.value > 1900)) {
            carField.classList.remove("bad-data")
        }
        
    }



    
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
})

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


