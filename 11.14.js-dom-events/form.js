// -submit
// -change
// -input

const searchInput = document.querySelector("#search");
const text = document.querySelector(".text");

// searchInput.addEventListener("input", function (event) {
//   //   console.log(event.target.value);
//   text.textContent = searchInput.value;
// });
// searchInput.addEventListener("change", function (event) {
//   console.log(event.target.value);
// });

const studentForm = document.querySelector(".student-form");
const studentName = document.querySelector("#student-name");
const studentEmail = document.querySelector("#student-email");
const faculty = document.querySelector("#faculty");
const gpa = document.querySelector("#gpa");

const studentsArr = [];
studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(Date.now());

  let student;
  if (validate()) {
    student = {
      id: Date.now(),
      studentName: studentName.value,
      studentEmail: studentEmail.value,
      faculty: faculty.value,
      gpa: gpa.value,
    };

    studentsArr.push(student);
    console.log(studentsArr);
  } else {
    window.alert("bütün inputlar doldurulmalıdır!!");
  }

  drawTable(studentsArr);
  reset();
});

function reset() {
  //   studentName.value = "";
  //   studentEmail.value = "";
  //   gpa.value = "";
  //   faculty.value = "";

  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

const validate = () => {
  return Array.from(document.querySelectorAll("input")).every(
    (input) => input.value.trim() !== ""
  );
};

const tBody = document.querySelector("tbody");

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((student) => {
    // console.log(student);
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
            <td>${student.id}</td>
            <td>${student.studentName}</td>
            <td>${student.studentEmail}</td>
            <td>${student.faculty}</td>
            <td>${student.gpa}</td>

    `;

    console.log(trElem);

    tBody.appendChild(trElem);

    //     tBody.innerHTML += `
    //           <tr>
    //             <td>${student.id}</td>
    //             <td>${student.studentName}</td>
    //             <td>${student.studentEmail}</td>
    //             <td>${student.faculty}</td>
    //             <td>${student.gpa}</td>
    //         </tr> `;
  });
}
