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
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${Name}</p>
        <p><b>Email:</b> ${Email}</p>
        <p><b>Phone:</b> ${Phone}</p>

        <h3>Education</h3>
        <p>${Education}</p>

        <h3>Experience</h3>
        <p>${Experience}</p>

        <h3>Skills</h3>
        <p>${Skills}</p>
    `;

    // Display the generated resume content in the div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    } else {
        console.error("The resume display element is missing.");
    }
});

