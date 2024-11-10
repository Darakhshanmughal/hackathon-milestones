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
    var resumeContent = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contentEditable=\"true\">".concat(Name, "</span></p>\n        <p><b>Email:</b><span contentEditable=\"true\">").concat(Email, "</span></p>\n        <p><b>Phone:</b><span contentEditable=\"true\"> ").concat(Phone, "</span></p>\n\n        <h3>Education</h3>\n        <p contentEditable=\"true\">").concat(Education, "</p>\n\n        <h3>Experience</h3>\n        <p contentEditable=\"true\">").concat(Experience, "</p>\n\n        <h3>Skills</h3>\n        <p contentEditable=\"true\">").concat(Skills, "</p>\n    ");
    // Display the generated resume content in the div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
