let myContactFormEl = document.getElementById("myContactForm")
let titleEl = document.getElementById("title")
let firstNameEl = document.getElementById("firstName")
let lastNameEl = document.getElementById("lastName")
let dateEl = document.getElementById("date")
let numberEl = document.getElementById("number")
let emailEl = document.getElementById("email")
let descriptionEl = document.getElementById("description")
let myFileEl = document.getElementById("myFile")

let firstNameErrMsgEl = document.getElementById("firstNameErrMsg")
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg")
let numberErrMsgEl = document.getElementById("numberErrMsg")
let emailErrMsgEl = document.getElementById("emailErrMsg")

let greetingEl = document.getElementById("greeting")
let detail1El = document.getElementById("detail1")
let detail2El = document.getElementById("detail2")
let detail3El = document.getElementById("detail3")
let detail4El = document.getElementById("detail4")

let contactUsFormEl = document.getElementById("contactUsForm")
let detailsEl = document.getElementById("details")

let outputEl = document.getElementById("output")

firstNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstNameErrMsgEl.textContent = "Required*";
    } else {
        firstNameErrMsgEl.textContent = "";
    }
})
lastNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameErrMsgEl.textContent = "Required*";
    } else {
        lastNameErrMsgEl.textContent = "";
    }
})
numberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        numberErrMsgEl.textContent = "Required*";
    } else {
        numberErrMsgEl.textContent = "";
    }
})
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
})

function validateContactFormData() {
    let count = 0
    if (firstNameEl.value == "") {
        firstNameErrMsgEl.textContent = "Required*";
    } else {
        count += 1
    }
    if (lastNameEl.value == "") {
        lastNameErrMsgEl.textContent = "Required*";
    } else {
        count += 1
    }
    if (numberEl.value == "") {
        numberErrMsgEl.textContent = "Required*";
    } else {
        count += 1
    }
    if (emailEl.value == "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        count += 1
    }
    if (count === 4) {
        let formdetails = {
            title: titleEl.value,
            firstName: firstNameEl.value,
            lastName: lastNameEl.value,
            date: dateEl.value,
            number: numberEl.value,
            email: emailEl.value,
            description: descriptionEl.value,
            myFile: myFileEl.value
        }
        localStorage.setItem("formdetails", JSON.stringify(formdetails));
        let stringifiedFormDetails = localStorage.getItem("formdetails");
        let parsedFormDetails = JSON.parse(stringifiedFormDetails);

        greetingEl.textContent = parsedFormDetails.title + " " + parsedFormDetails.firstName + " " + parsedFormDetails.lastName
        detail1El.textContent = parsedFormDetails.date
        detail2El.textContent = parsedFormDetails.number
        detail3El.textContent = parsedFormDetails.description
        detail4El.textContent = parsedFormDetails.myFile

        contactUsFormEl.classList.add("contacts-form-show")
        detailsEl.classList.remove("data-show")

        firstNameEl.value = "";
        lastNameEl.value = "";
        dateEl.value = "";
        numberEl.value = "";
        emailEl.value = "";
        descriptionEl.value = "";
        myFileEl.value = "";

    }
}
let backBtnEl = document.getElementById("backBtn")
backBtnEl.onclick = function() {
    contactUsFormEl.classList.remove("contacts-form-show")
    detailsEl.classList.add("data-show")
}

myContactFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateContactFormData();
})
