
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
    
  checkCarField()
  checkStartDate()
  checkDays()
  checkCVV()
  checkEmpty()
  calcTotal()
  postTotal()
})

function calcTotal () {
}

function postTotal () {
  console.log('AM I WORKING?')
  inputFields[inputFields.length - 1].classList.add('input-valid')

  const fieldValidations = []

  for (const field of inputFields) {
    fieldValidations.push(field.classList.contains('input-valid'))
  }

  function testField (bool) {
    return bool
  }
  console.log(fieldValidations.every(testField))

  if (fieldValidations.every(testField)) {
    const totalField = document.querySelector('#total')
    totalField.innerText = 'TOTAL = '
  }
}

function checkStartDate () {
  if (startDate.value !== '') {
    if (startDateField.classList.contains('bad-data')) {
      if (moment().isBefore(startDate.value, 'day')) {
        startDateField.classList.add('input-valid')
        // FIGURE OUT HOW TO REMOVE LABEL STRINGS
        startDateField.querySelector('label').innerText.replace(isRequired, '')
        const err = startDateField.lastChild
        startDateField.removeChild(err)
        startDateField.classList.remove('bad-data')
        startDateField.classList.remove('input-invalid')
      } else if (startDate.value === '') {
        startDateField.classList.remove('bad-data')
        startDateField.classList.remove('input-invalid')
        const err = startDate.lastChild
        startDateField.removeChild(err)
      }
    } else if (moment().isAfter(startDate.value, 'day')) {
      startDateField.classList.add('bad-data')
      startDateField.classList.remove('input-valid')
      startDateField.classList.add('input-invalid')
      const newEl = document.createElement('div')
      const fieldError = document.createTextNode('*Start date must be in the future')
      newEl.appendChild(fieldError)
      startDateField.appendChild(newEl)
    }
  }
}

function checkCVV () {
  if (cvvField.classList.contains('bad-data')) {
    if ((!isNaN(cvvNum.value) && (cvvNum.value.length == 3))) {
      cvvField.classList.add('input-valid')
      // FIGURE OUT HOW TO REMOVE LABEL STRINGS
      cvvField.querySelector('label').innerText.replace(isRequired, '')
      const err = cvvField.lastChild
      cvvField.removeChild(err)
      cvvField.classList.remove('bad-data')
      cvvField.classList.remove('input-invalid')
    } else if (cvvNum.value == '') {
      cvvField.classList.remove('bad-data')
      cvvField.classList.remove('input-invalid')
      const err = daysField.lastChild
      cvvField.removeChild(err)
    }
  } else if ((cvvNum.value !== '') && ((isNaN(cvvNum.value)) || (cvvNum.value.length !== 3))) {
    cvvField.classList.add('bad-data')
    cvvField.classList.remove('input-valid')
    cvvField.classList.add('input-invalid')
    const newEl = document.createElement('div')
    const fieldError = document.createTextNode('*Must enter valid 3-digit number')
    newEl.appendChild(fieldError)
    cvvField.appendChild(newEl)
  }
}

function checkDays () {
  if (daysField.classList.contains('bad-data')) {
    console.log("don't repeat")
    if (!isNaN(numOfDays.value) && (numOfDays.value > 0) && (numOfDays.value <= 30)) {
      console.log('is good')
      daysField.classList.add('input-valid')
      // FIGURE OUT HOW TO REMOVE LABEL STRINGS
      daysField.querySelector('label').innerText.replace(isRequired, '')
      const err = daysField.lastChild
      daysField.removeChild(err)
      daysField.classList.remove('bad-data')
      daysField.classList.remove('input-invalid')
    } else if (numOfDays.value == '') {
      daysField.classList.remove('bad-data')
      daysField.classList.remove('input-invalid')
      const err = daysField.lastChild
      daysField.removeChild(err)
    }
  } else if ((numOfDays.value !== '') && ((isNaN(numOfDays.value)) || (numOfDays.value < 1) || (numOfDays.value > 30))) {
    console.log(numOfDays.value)
    console.log('days data bad')
    daysField.classList.add('bad-data')
    daysField.classList.remove('input-valid')
    daysField.classList.add('input-invalid')
    const newEl = document.createElement('div')
    const fieldError = document.createTextNode('*Must enter valid number between 1 and 30')
    newEl.appendChild(fieldError)
    daysField.appendChild(newEl)
    // daysField.querySelector("label").innerText += isRequired
    // } else if ((!isNaN(numOfDays.value) && (numOfDays.value > 0) &&(numOfDays.value <= 30))) {
  }
}

function checkCarField () {
  const carYear = document.querySelector('#car-year')
  const carField = document.querySelector('#car-field')
  if (carField.classList.contains('bad-data')) {
    if ((carYear.value > 1900) && (moment().isAfter(carYear.value, 'year')) && (carYear.value.match(numbers))) {
      carField.classList.add('input-valid')
      // FIGURE OUT HOW TO REMOVE LABEL STRINGS
      carField.querySelector('label').innerText.replace(isRequired, '')
      const err = carField.lastChild
      carField.removeChild(err)
      carField.classList.remove('bad-data')
      carField.classList.remove('input-invalid')
    } else if (carYear.value == '') {
      carField.classList.remove('bad-data')
      carField.classList.remove('input-invalid')
      const err = carField.lastChild
      carField.removeChild(err)
    }
  } else if ((carYear.value !== '') && ((carYear.value <= 1900) || (moment().isBefore(carYear.value, 'year') || (carYear.value.match(numbers)) == false))) {
    console.log('car data bad')
    carField.classList.add('bad-data')
    carField.classList.remove('input-valid')
    carField.classList.add('input-invalid')
    const newEl = document.createElement('div')
    const fieldError = document.createTextNode('*Year not valid')
    newEl.appendChild(fieldError)
    carField.appendChild(newEl)
    // FIGURE OUT HOW TO ADD isRequired IF NOT THERE
    // if (carField.querySelector("label").innerText.includes(isRequired) == false) {
    //     carField.querySelector("label").innerText += isRequired
    // }
  } else if ((carYear.value > 1900) && (moment().isAfter(carYear.value, 'year') && (carYear.value.match(numbers)))) {
    carField.classList.add('input-valid')
    carField.querySelector('label').innerHTML.replace(isRequired, '')
    if (carField.classList.contains('bad-data')) {
      const err = carField.lastChild
      carField.removeChild(err)
    }
  }
}

function checkEmpty () {
  for (let field of inputFields) {
    console.log(field)
    if (field.value === '') {
      if (field.parentNode.classList.contains('input-invalid')) {

      } else {
        field.parentNode.classList.remove('input-valid')
        field.parentNode.classList.add('input-invalid')
        // if (field.querySelector('label').innerHTML.includes(isRequired) == false) {
        //   field.querySelector('label').innerHTML += isRequired
        // }
        console.log(field.querySelector('label'))
      }
    } else {
      console.log('check for bad data...')
      if (field.parentNode.classList.contains('bad-data')) {
        console.log('bad data - do not validate')
      } else {
        console.log('data is good')
        field.parentNode.classList.remove('input-invalid')
        field.parentNode.classList.add('input-valid')
        if (field.parentNode.querySelector('label').innerHTML.includes(isRequired) === true) {
          field.parentNode.querySelector('label').innerHTML = field.parentNode.querySelector('label').innerHTML.replace(isRequired, '')
        }
      }
    }
  }
}
