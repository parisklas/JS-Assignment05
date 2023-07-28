

function logSubmit(event) {
  console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
  event.preventDefault();
  console.log(document.getElementById('id').value);
  console.log(document.getElementById('name').value);
  console.log(document.getElementById('ext').value);
  console.log(document.getElementById('email').value);
  console.log(document.getElementById('department').value);
}

const empForm = document.getElementById("empform");
document.addEventListener("submit", logSubmit);

