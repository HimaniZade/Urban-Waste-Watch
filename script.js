function showMessage() {
    document.getElementById("report").scrollIntoView({
        behavior: "smooth"
    });
}

function submitReport(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const issue = document.getElementById("issue").value;
    const location = document.getElementById("location").value;

    document.getElementById("result").innerHTML =
        "✅ Thank you, " + name +
        "! Your " + issue +
        " report for " + location +
        " has been submitted successfully.";
}
