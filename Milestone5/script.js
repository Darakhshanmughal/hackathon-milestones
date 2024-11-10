// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLink = document.getElementById('shareable-link');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var downloadPDFButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile picture
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Display resume content
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" style=\"width: 100px; height: auto; border-radius: 50%;\">") : '', "\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate shareable link
    var shareableURL = new URL(window.location.href);
    shareableURL.searchParams.set('name', name);
    shareableURL.searchParams.set('email', email);
    shareableURL.searchParams.set('phone', phone);
    shareableURL.searchParams.set('education', education);
    shareableURL.searchParams.set('experience', experience);
    shareableURL.searchParams.set('skills', skills);
    shareableLink.href = shareableURL.toString();
    shareableLinkContainer.style.display = 'block';
});
// PDF Download functionality
downloadPDFButton.addEventListener('click', function () {
    var element = document.getElementById('resume-display');
    if (element) {
        // Call html2pdf from the globally loaded script
        window.html2pdf().from(element).save('resume.pdf');
    }
});
