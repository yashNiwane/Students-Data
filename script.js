
let enrolledStudents = [];

function submitForm(event) {
  event.preventDefault();

 
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    website: document.getElementById('web').value,
    image: document.getElementById('image').value,
    gender: document.querySelector('input[name="fav_language"]:checked').value,
    skills: getSelectedSkills(),
  };


  enrolledStudents.push(formData);

  displayEnrolledStudents();
  clearForm();
}


function getSelectedSkills() {
  const skills = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach((checkbox) => {
    skills.push(checkbox.nextElementSibling.textContent);
  });

  return skills;
}


function displayEnrolledStudents() {
  const tableBody = document.querySelector('#enrolledTable tbody');
  tableBody.innerHTML = ''; 


  enrolledStudents.forEach((student, index) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = `
      <strong>Name:</strong> ${student.name}<br>
      <strong>Email:</strong> ${student.email}<br>
      <strong>Gender:</strong> ${student.gender}<br>
      <strong>Website:</strong> ${student.website}<br>
      <strong>Skills:</strong> ${student.skills.join(', ')}
    `;
    cell2.innerHTML = `<img src="${student.image}" alt="Student Image" class="w-16 h-16 object-cover rounded-full">`;
  });
}




function clearForm() {
  document.getElementById('studentForm').reset();
}


document.getElementById('studentForm').addEventListener('submit', submitForm);
