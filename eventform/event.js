
const form = document.querySelector("#fsyForm");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

const ticketType= document.querySelector("#ticketType");
const studentBox = document.querySelector("#studentBox");
const guestBox = document.querySelector("#guestBox");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");



ticketType.addEventListener("change", function() {
    studentBox.style.display = "none";
    guestBox.style.display = "none";

    if (ticketType.value === "student") {
        studentBox.style.display = "block";
    } else if (ticketType.value === "guest") {
        guestBox.style.display = "block";
    }
});


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const ticket = form.ticketType.value;
  const availableDate = form.availableDate.value;
  const student = form.studentId.value.trim();
  const guest = form.accessCode.value.trim();

  let extraInfo = "";

  if (ticket === "student") {
    return extraInfo = `<p>Student ID: ${student}</p>`;
  } else if (ticket === "guest") {
    return extraInfo = `<p>Guest Access Code: ${guest}</p>`;
  }


  output.innerHTML = `
  <h2>Ticket Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Ticket Type: ${ticket}</p>
  <p>Date: ${availableDate}</p>
    ${extraInfo}
  `;

  form.reset();
  studentBox.style.display = "none";
  guestBox.style.display = "none";
});
          







