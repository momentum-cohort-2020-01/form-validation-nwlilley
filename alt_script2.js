

let inputFields = document.querySelectorAll(".input-field")
let isRequired = " info is required"
let badCarData = "<br/><em>Car year is not valid</em>"
let form = document.querySelector("#parking-form")
let carYear = document.querySelector("#car-year")
let carField = document.querySelector("#car-field")

//FORM SUBMIT
form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkEmpty ();
    checkCarField() 

})

//FUNCTIONS
function checkEmpty() {
    for (let field of inputFields) {
        
        if (field.querySelector("input").value == "") { 
            console.log("do nothong")
            if (field.classList.contains("input-invalid")) {
                
            } else {
                field.classList.add("input-invalid")
                if (field.querySelector("label").innerHTML.includes(isRequired) == false) {
                    field.querySelector("label").innerHTML += isRequired
                }   
            }  
        } else { 

             field.classList.remove("input-invalid")
             if (field.querySelector("label").innerHTML.includes(isRequired) == true) {
                field.querySelector("label").innerHTML = field.querySelector("label").innerHTML.replace(isRequired, "")
            }
        }
    }    
}


function checkCarField() {
    if (carYear.value > 1900) {
        carField.classList.add("input-valid")
    }

}



