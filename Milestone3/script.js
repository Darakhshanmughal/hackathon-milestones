var form = document.getElementById("Resume-form");
var resumeDisplayElement = document.getElementById("Resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Phone = document.getElementById("Phone").value;
    var Education = document.getElementById("Education").value;
    var Experience = document.getElementById("Experience").value;
    var Skills = document.getElementById("Skills").value;
    var resumeContent = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(Name, "</p>\n        <p><b>Email:</b> ").concat(Email, "</p>\n        <p><b>Phone:</b> ").concat(Phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(Education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(Experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(Skills, "</p>\n    ");
    // Display the generated resume content in the div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
