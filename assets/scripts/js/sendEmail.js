function sendMail(contactForm) {
    emailjs.send("emailJS", "horizonanimatie", {
        "from_name": contactForm.name.value, 
        "organisation": contactForm.organisation.value,
        "phone": contactForm.phone.value,
        "from_email": contactForm.emailaddress.value,
        "startdate": contactForm.startdate.value,
        "enddate": contactForm.enddate.value,
        "message": contactForm.message.value,
    }, "pO6iguNSliFMMJnWE")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error)
        });
        return false;
}
