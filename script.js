console.log('Add validation!');

let inputFields = document.querySelectorAll(".input-field")

let isRequired = " info is required"
// let fields = document.querySelectorAll(".field")

let form = document.querySelector("#parking-form")

.addEventListener("submit", function(event) {
    event.preventDefault();
    for (let field of inputFields) {
        
        if (field.querySelector("input").value == "") { 
            if (field.classList.contains("input-invalid")) {
                console.log("do nothing")
                
            } else {
                field.classList.remove("input-valid")
                field.classList.add("input-invalid")
                if (field.querySelector("label").innerHTML.includes(isRequired) == false) {
                    field.querySelector("label").innerHTML += isRequired
                }
                
            }  
        } else { 
            console.log("not empty")
            field.classList.remove("input-invalid")
            field.classList.add("input-valid")
            if (field.querySelector("label").innerHTML.includes(isRequired) == true) {
                field.querySelector("label").innerHTML = field.querySelector("label").innerHTML.replace(isRequired, "")
            }
        }
    }

        
            
        
    
})

