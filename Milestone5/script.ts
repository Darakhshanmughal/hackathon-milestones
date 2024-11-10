// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const downloadPDFButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Handle profile picture
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Display resume content
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" style="width: 100px; height: auto; border-radius: 50%;">` : ''}
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;
    resumeDisplayElement.innerHTML = resumeHTML;

    // Generate shareable link
    const shareableURL = new URL(window.location.href);
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
downloadPDFButton.addEventListener('click', () => {
    const element = document.getElementById('resume-display');
    if (element) {
        // Call html2pdf from the globally loaded script
        (window as any).html2pdf().from(element).save('resume.pdf');
    }
});
