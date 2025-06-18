document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Fake form processing
    document.getElementById("responseMsg").textContent = "Thank you! We'll get back to you soon.";

    // Optionally reset the form
    this.reset();
});
