// Handle load event of window object




var idInput = document.getElementById("id");
var nameInput = document.getElementById("name");
var extInput = document.getElementById("ext");
var emailInput = document.getElementById("email");
var departmentInput = document.getElementById("department");

document.getElementById('empForm').addEventListener("submit", function (e) {
    e.preventDefault();
      // handles sumbit
    console.log(idInput.value);
    console.log(nameInput.value);
    console.log(extInput.value);
    console.log(emailInput.value);
    console.log(departmentInput.value);
});
