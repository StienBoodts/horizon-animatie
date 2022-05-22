function sendMail(contactForm) {
    emailjs.send("emailJS", "horizonanimatie", {
        "from_name": contactForm.name.value, 
        "organisation": contactForm.organisation.value,
        "phone": contactForm.phone.value,
        "from_email": contactForm.emailaddress.value,
        "startdate": contactForm.startdate.value,
        "enddate": contactForm.enddate.value,
        "message": contactForm.message.value,
        "selectioninform": contactForm.selectioninform.value
    }, "pO6iguNSliFMMJnWE")
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thank you! We'll be in touch soon.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Oops! Something went wrong. Please refresh and try again.");
        });
        return false;
}
