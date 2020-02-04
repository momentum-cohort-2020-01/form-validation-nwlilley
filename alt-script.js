const inputFields = document.querySelectorAll('input')

const isRequired = ' info is required'
const badCarData = '<br/><em>Car year is not valid</em>'
const form = document.querySelector('#parking-form')

const daysField = document.querySelector('#days-field')
const numOfDays = daysField.querySelector('input')
const cvvField = document.querySelector('#cvv-field')
const cvvNum = cvvField.querySelector('input')
const startDateField = document.querySelector('#start-date-field')
const startDate = startDateField.querySelector('input')
const numbers = /^[0-9]+$/

form.addEventListener('submit', function (event) {
  event.preventDefault()
  checkName ()
  checkCar ()
  checkStartDate ()
})

function markValid (field) {
  field.classList.remove('input-invalid')
  field.classList.add('input-valid')
  removeErrorDiv(field)
}

function markInvalid (field) {
  field.classList.remove('input-valid')
  field.classList.add('input-invalid')
  if (field.classList.contains('input-invalid' === false)) {
    field.addErrorLabel(field)
  }
}

function createErrorDiv (field, message) {
  const newEl = document.createElement('div')
  const fieldError = document.createTextNode(message)
  newEl.appendChild(fieldError)
  newEl.classList.add('text-danger')
  if (field.classList.contains('bad-data') === false) {
    field.appendChild(newEl)
    field.classList.add('bad-data')
  }
}

function removeErrorDiv (field) {
  const err = field.lastChild
  field.removeChild(err)
  field.classList.remove('bad-data')
}

function addErrorLabel (field) {
  const errorLabel = ' info is required'
  field.querySelector('label').innerText += errorLabel
}

function removeErrorLabel (field) {
  const errorLabel = ' info is required'
  field.querySelector('label').innerText.replace('errorLabel', '')
}

function checkName () {
  const nameField = document.querySelector('#name-field')
  const nameInput = nameField.querySelector('input').value
  const nameFieldEmpty = 'Name info is required'
  if (nameInput === '') {
    markInvalid(nameField)
    createErrorDiv(nameField, nameFieldEmpty)
  } else {
    markValid(nameField)
    removeErrorDiv(nameField)
  }
}

function checkCar () {
  const carField = document.querySelector('#car-field')
  const carFieldEmpty = 'Car info is required'
  const carYearError = 'Car year is not valid'
  let carYearInput = document.querySelector('#car-year').value
  let carMakeInput = document.querySelector('#car-make').value
  let carModelInput = document.querySelector('#car-model').value
  if (carYearInput === '' || carMakeInput === '' || carModelInput === '') {
    markInvalid(carField)
    createErrorDiv(carField, carFieldEmpty)
  } else if (((carYearInput <= 1900) || (moment().isBefore(carYearInput, 'year')) || (carYearInput.match(numbers)) === false)) {
    markInvalid(carField)
    createErrorDiv(carField, carYearError)
  } else {
    markValid(carField)
    removeErrorDiv(carField)
  }
}

function checkStartDate () {
  const startDateField = document.querySelector('#start-date-field')
  const startDateInput = startDateField.querySelector('#start-date').value
  const startDateError = 'Date must be in the future'
  console.log("working")
  if (moment().isBefore(startDateInput, 'day')) {
    markInvalid(startDateField)
    createErrorDiv(startDateField, startDateError)
  }
}

