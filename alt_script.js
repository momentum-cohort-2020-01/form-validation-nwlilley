
let inputFields = document.querySelectorAll(".input-field")
let form = document.querySelector("#parking-form")
let isRequired = " info is required"







function checkEmpty () {
    for (let field of inputFields) {
        if ( field.querySelector("input").value === "") {
            console.log("empty field")
            field.classList.add("input-invalid")
            let newEl = document.createElement("div")
            let fieldError = document.createTextNode("*required field")
            newEl.appendChild(fieldError)
            field.appendChild(newEl)


        } else {
            console.log("field not empty")
            field.classList.remove("input-invalid")
            let err = field.lastChild
            field.removeChild(err)

        }
    }
}
 


form.addEventListener("submit", function(event) {
    event.preventDefault();
    checkEmpty ();
})