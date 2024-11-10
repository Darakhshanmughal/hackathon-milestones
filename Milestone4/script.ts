const form = document.getElementById("Resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("Resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const Name = (document.getElementById("Name") as HTMLInputElement).value;
    const Email = (document.getElementById("Email") as HTMLInputElement).value;
    const Phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const Education = (document.getElementById("Education") as HTMLTextAreaElement).value;
    const Experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;
    const Skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;

    const resumeContent = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b><span contentEditable="true">${Name}</span></p>
        <p><b>Email:</b><span contentEditable="true">${Email}</span></p>
        <p><b>Phone:</b><span contentEditable="true"> ${Phone}</span></p>

        <h3>Education</h3>
        <p contentEditable="true">${Education}</p>

        <h3>Experience</h3>
        <p contentEditable="true">${Experience}</p>

        <h3>Skills</h3>
        <p contentEditable="true">${Skills}</p>
    `;

    // Display the generated resume content in the div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    } else {
        console.error("The resume display element is missing.");
    }
});

